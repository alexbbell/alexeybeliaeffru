export interface IExample {
  dig1: number
  dig2: number
  result?: number
}

export const AllMathActions: string[] = ['addition', 'subtraction', 'multiplication', 'division']
export type MathActions = typeof AllMathActions[number]

export interface IMathSettings {
  minValue: number
  maxValue: number
  mathAction: string | MathActions
}
