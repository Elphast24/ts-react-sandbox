export interface useMarkdownReturn {
    rawText: string,
    htmloutput: string,
    updatedText: (newText: string) => void
}