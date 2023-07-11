import Posts from "./component/Posts"
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3tl text-center dark:text-white">
        Hello  and welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Paccy</span>

        </span>
      </p>
      < Posts />
    </main>
  )
}
