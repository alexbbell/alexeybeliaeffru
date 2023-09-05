import React, { type FormEvent, useState } from 'react'
import { authUrl } from './../LangMaster/config'
import { type ILoginData } from '../LangMaster/BLLangMaster'
import { saveUserToken } from './../../../store/langSlice'
import axios from 'axios'
import { useAppDispatch } from '../../../hooks'

export default function Login (): JSX.Element {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // const [token, setToken] = useState<string>()
  const dispatch = useAppDispatch()
  async function loginUser (credentials: ILoginData): Promise<void> {
    console.log(JSON.stringify(credentials))
    const data = {
      username: username,
      password: password
    }
    axios.post(authUrl, data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        // setToken(res.data)
        dispatch(saveUserToken(res.data))
      })
      .catch(function (error) {
        dispatch(saveUserToken(''))

        console.log({ error })
      })
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log(e)
    const t: ILoginData = {
      username: username,
      password: password
    }
    void loginUser(t)
    //     const t = loginUser({
    //       username: ,
    //       password
    //     }).then(res => {
    //       setToken(res)
    //     })
    //     console.log('t', t)
  }

  return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={ handleSubmit }>
                <h1>Please Log In</h1>
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
