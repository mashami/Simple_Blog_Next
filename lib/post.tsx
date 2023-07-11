import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark";
import  Html  from "remark-html"


const postsDirectory = path.join(process.cwd(),'blogPosts')

export function getSortedPostsData() {
    const fileName = fs.readdirSync(postsDirectory);
    const allPostData = fileName.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
  
      // Read markdown file as String
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
  
      // Extract the title and date using regular expressions
      const titleRegex = /title:\s*'([^']+)'/;
      const dateRegex = /date:\s*'([^']+)'/;
      const titleMatch = fileContents.match(titleRegex);
      const dateMatch = fileContents.match(dateRegex);
      const title = titleMatch ? titleMatch[1] : '';
      const date = dateMatch ? dateMatch[1] : '';
  
      const blogPost = {
        id,
        title,
        date,
      };
     
      return blogPost;
    });
    return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
  }


  export async function getPostData(id:string){

    const fullPath = path.join (postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //use gray-matter to parse the  post metadata section

    const metterResult = matter(fileContents)

    const processedContent = await remark()
    .use(Html)
    .process(metterResult.content);

    const contentHtlm = processedContent.toString();

  // Extract the title and date using regular expressions
  const titleRegex = /title:\s*'([^']+)'/;
  const dateRegex = /date:\s*'([^']+)'/;
  const titleMatch = fileContents.match(titleRegex);
  const dateMatch = fileContents.match(dateRegex);
  const title = titleMatch ? titleMatch[1] : '';
  const date = dateMatch ? dateMatch[1] : '';

    const blogPostWithHtml: blogpost & { contentHtlm: string} = {
        id,
        title,
        date,
        contentHtlm

    }

    //combine the data with the id
    return blogPostWithHtml

  }
  
  