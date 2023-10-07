import React, { type FormEvent, useState } from 'react'
import { authUrl } from '../../../config'
import { type ILoginData } from '../LangMaster/BLLangMaster'
import { saveUserToken } from './../../../store/langSlice'
import axios from 'axios'
import { useAppDispatch } from '../../../hooks'
import { useLocalStorage } from 'usehooks-ts'

export default function Login (): JSX.Element {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [, setTokenAuth] = useLocalStorage('userToken', '')
  // const [token, setToken] = useState<string>()
  const dispatch = useAppDispatch()
  async function loginUser (credentials: ILoginData): Promise<void> {
    // console.log(JSON.stringify(credentials))
    const data = {
      username,
      password
    }
    axios.post(authUrl, data,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        // setToken(res.data)
        dispatch(saveUserToken(res.data))
        setTokenAuth(res.data)
      })
      .catch(function (error) {
        dispatch(saveUserToken(''))
        setTokenAuth('')
        console.log({ error })
      })
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const t: ILoginData = {
      username,
      password
    }
    void loginUser(t)
  }

  return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={ handleSubmit }>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => { setUserName(e.target.value) }} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => { setPassword(e.target.value) }} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
  )
}
