export interface IStaticPage {
  query: string
  title?: string
}

export interface INewsAnons {
  id: number
  date: Date
  status: string
  title: string
  excerpt: string
  link: string
}
