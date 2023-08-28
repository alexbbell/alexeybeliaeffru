export interface ILangSiteObjects {
  lang: string
  siteobjects: ISiteObjects
}

export interface ISocial {
  name: string
  url: string
  className: string
}

export interface IMain {
  greeting: string
  beforename: string
  name: string
  position: string
  titleAbout: string
  description: string
  image: string
  bio: string
  email: string
  phone: string
  address: string
  about: string
  website: string
  resumedownload: string
  social: ISocial[]
}

export interface ISiteObjects {
  morelink: string
  fullname: string
  menu: string
  skills: Skills
  main: IMain
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
  main: { about: '', address: '', beforename: '', bio: '', description: '', email: '', greeting: '', image: '', name: '', phone: '', position: '', resumedownload: '', social: [], titleAbout: '', website: '' },
  menu: '',
  skills: { title: '', content: [] },
  work: { title: '', content: [] }
}
export const emptyLangObject: ILangSiteObjects = {
  lang: 'en',
  siteobjects: emptyObject
}
