export const baseUrl: string = (process.env.NODE_ENV === 'production') ? 'https://beliaeff.ru/api' : 'https://localhost:7168/api'
export const mainUrl: string = baseUrl + '/Lang/'
export const authUrl: string = baseUrl + '/Auth/'
export const pubDir: string = (process.env.NODE_ENV === 'production') ? '/public/' : '/'
