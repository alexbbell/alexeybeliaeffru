import axios from 'axios'
import { emptyObject, type ISiteObjects } from './BLLangMaster'
import { mainUrl } from '../../../config'

export function updateSkills (lang: string, newContent: ISiteObjects, token: string): void {
  const langApiUrl: string = mainUrl + '?lang=' + lang
  void axios.post(langApiUrl, newContent,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
    console.log('res update', res.data)
  })
}

export const GetLangContent = async (lang: string, token: string): Promise<ISiteObjects> => {
  let data: ISiteObjects = emptyObject
  await axios.get(mainUrl + lang,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
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
