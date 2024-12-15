export default function removeHTML(htmlString: string): string {
  if (htmlString === null || htmlString === '') return ''
  else htmlString = htmlString.toString()

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return htmlString.replace(/(<([^>]+)>)/gi, '')
}
