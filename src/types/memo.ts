export interface Memo {
  id: number
  title: string
  body: string
  tags: string[]
}

export interface MemoInput {
  title: string
  body: string
  tags: string
}
