export interface Memo {
  title: string
  body: string
  tags: string[]
}

export interface MemoInput {
  title: string
  body: string
  tags: string
}

export interface MemoResponse extends Memo {
  id: number | string
}
