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

// For analogclock
export interface IPoint {
  x: number
  y: number
}
export interface IWatch {
  sec: IPoint
  min: IPoint
  hour: IPoint
}
export interface IClockParams {
  size: number
}
export const defCoords: IWatch = {
  sec: {
    x: 0,
    y: 0
  },
  min: {
    x: 0,
    y: 0
  },
  hour: {
    x: 0,
    y: 0
  }
}
