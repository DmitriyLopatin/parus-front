import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import AuthTIN from './AuthTIN';
import AuthECP from './AuthECP';



type FormValues = {
  tin: string;
  password?: string;
  upload: any;
  password_ecp?:string
};

const Authorization = () => {
  
  const [authType, setAuthType] = useState(1)
  const [fileName, setFileName] = useState("Загрузите сертификат");
  const [error, setError] = useState<any>(false)


  return (
    <div className='authorization'>
      <div className='authorization__container'>
        <h2 className='title'>Вход</h2>
        <div>
          <button onClick={() => setAuthType(1)} className={authType == 1 ? 'c-btn c-btn__secondary c-btn__noRightRadius' : 'c-btn c-btn__primary c-btn__noRightRadius'}>ИИН/БИН</button>
          <button onClick={() => setAuthType(2)} className={authType == 2 ? 'c-btn c-btn__secondary c-btn__noLeftRadius' : 'c-btn c-btn__primary c-btn__noLeftRadius'}>ЭЦП</button>
        </div>

        {authType == 1 ?
          <AuthTIN/>
          :null}

          {authType == 2 ?
            <AuthECP/>
            : null}

        <p className='notice'><Link href="/registration"><span>Регистрация</span></Link><span>Забыли пароль?</span></p>
      </div>
    </div>
  )
}

export default Authorization

