import axios from 'axios'
import { emptyObject, type ISiteObjects } from './BLLangMaster'
import { mainUrl } from './config'

export function updateSkills (lang: string, newContent: ISiteObjects): void {
  const langApiUrl: string = mainUrl + '?lang=' + lang

  // const sendData: ILangSiteObjects = {
  //   lang: lang,
  //   siteobjects: newContent
  // }
  console.log('updateSkills', newContent)
  void axios.post(langApiUrl, newContent,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
    console.log('result', res)
  })
}

export const GetLangContent = async (lang: string): Promise<ISiteObjects> => {
  let data: ISiteObjects = emptyObject
  console.log(mainUrl + lang)
  // const response: any = await axios.get(mainUrl + lang)
  await axios.get(mainUrl + lang).then(response => {
    data = response.data
    return data
  }).catch(err => {
    data = emptyObject
    data.errorText = 'some kind of shit' // err.AxiosError?.message
    console.log('err', err)
    return data
  })
  return data
}
