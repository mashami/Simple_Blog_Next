export default function getFormattedDate(dataString:string):string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dataString))
}
