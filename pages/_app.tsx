import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Context } from '../app/utils/context'
import { useEffect, useState } from 'react'
import { UserService } from '../app/services/UserService'

function MyApp({ Component, pageProps }: AppProps) {
  const [asideShort, setAsideShort] = useState(false)
  const [userData, setUserData] = useState({ userName: "", userSurname: "", userRole:"" })
  const handleAsideShort = () => setAsideShort(!asideShort)

  // if (token){

  // console.log(Context)
  useEffect(() => {
    if(localStorage.getItem('.AuthToken'))
    UserService.getUser()
      .then(response => {
        console.log(response)
        setUserData({
          userName:response.data.data[0].name, 
          userSurname:response.data.data[0].surname, 
          userRole:response.data.data[0].role})
      })
  },[])


return (
  <Context.Provider value={{ asideShort: [asideShort, handleAsideShort], userData: [userData, setUserData] }}>
    <Component {...pageProps} />
  </Context.Provider>
)
}

export default MyApp
