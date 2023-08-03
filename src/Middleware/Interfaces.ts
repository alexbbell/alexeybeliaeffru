export interface SiteLink {
    key?: string,
    label: string,
    url: string,
}



export type Description = {
    fullname: string, 
    position: string,
    morelink: string, 
    resume : string, 
    contacts :  string, 
    sitemap :  string, 
  
    home : string,
    experience: string,
    skills: string,
    blogs: string,
    about: string,
     
  }

  
export type Beliaev = {
    lang: string, 
    selectedPage: number, 
    words: Description,
  }
  