import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import IconsContent from "../../icons/IconsContent"
import { UserService } from '../../services/UserService';
import { useRouter } from 'next/router'
import { useUserDataContext } from '../../utils/context';

type FormValues = {
  iin_bin: string;
  password: string;

};

const AuthTIN = () => {
  const {userData} = useUserDataContext()
  const router = useRouter()
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>({ mode: "onBlur" });
  
  const onSubmit = (authData: any) => {
    UserService.signInUser(authData).then(
      (response)=>{
        userData[1]({
          userName:response.data.user.name, 
          userSurname:response.data.user.surname,
          userRole: response.data.user.role
        })
        response.data.user.role == "admin" ? router.push('/administrator'):router.push('/user');
        localStorage.setItem('.AuthToken',response.data.token)
      })
    
    // reset();
  };
  return (
    <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="input_wrapper">
        <label htmlFor="">ИИН/БИН</label>
        <input type="text" className={errors.iin_bin ? "input_wrapper-error" : ""}{...register("iin_bin", { required: `Пользователь не найден среди действующих клиентов, обратитесь в `, })} />
        {errors.iin_bin && (<div className="input_wrapper-error">{IconsContent.Error()}<p>{errors.iin_bin.message}<span>службу поддержки</span></p> </div>)}
      </div>
      <div className="input_wrapper">
        <label htmlFor="">Пароль</label>
        <input type="password" className={errors.password ? "input_wrapper-error" : ""}{...register("password", { required: "Заполните обязательное поле", })} />
        {errors.password && (<p className="input_wrapper-error">{errors.password.message}</p>)}
      </div>
      <button type="submit" className="c-btn c-btn__secondary">Войтиииииииииииииии</button>
    </form>
  )
}

export default AuthTIN
