export interface ILangSiteObjects {
  lang: string
  siteobjects: ISiteObjects
}

export interface ISiteObjects {
  morelink: string
  fullname: string
  menu: string
  skills: Skills
  main: string[]
  work: Work
  education: Education
}

export interface Skill {
  name: string
  description: string
}
export interface Skills {
  title: string
  content: Skill[]
}

export interface Education {
  title: string
  content: EducationItem[]
}

export interface EducationItem {
  school: string
  degree: string
  graduated: string
  description: string
}

export interface Work {
  title: string
  content: WorkItem[]
}

export interface WorkItem {
  company: string
  title: string
  years: string
  description: string
}

export const emptyObject: ISiteObjects = {
  morelink: '',
  education: { title: '', content: [] },
  fullname: '',
  main: [],
  menu: '',
  skills: { title: '', content: [] },
  work: { title: '', content: [] }
}
export const emptyLangObject: ILangSiteObjects = {
  lang: 'en',
  siteobjects: emptyObject
}

// export const requiredFields = ['morelink', 'fullname', 'menu', 'skills', 'main', 'work', 'education']

// export interface ISiteContent {
//     morelink: string,
//     fullname: string,
//     menu: string,
//     skills: string[],
//     main: string[]
//     work: string[]
//     education: string[]
// }

// export const readdata = async (key:string): Promise<string> => {
//     const t = await fetch('/locales/en/en-translation.json')
//     const movies: any = await t.json()
//     setContent(movies)
//     console.log(movies)

//     console.log(Object.keys(movies))
//     console.log(Object.keys(movies?.skills))
//     console.log(Object.keys(movies?.skills?.content))
//     console.log('jsp', movies.skills)
//   }
