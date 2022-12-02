import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import IconsContent from "../../icons/IconsContent"

type FormValues = {
    upload: any;
    password: string;

};

const AuthECP = () => {
    const [fileName, setFileName] = useState("Загрузите сертификат");
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>({ mode: "onBlur" });
    const onSubmit = (authData: any) => {

        console.log(authData)
        // reset();
    };
    return (
        <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="input_wrapper">
                <label htmlFor="">Сертификат ЭЦП</label>
                <div className='input_wrapper-inner'>
                    <input type="file" id={"file"} {...register("upload", { onChange: (e) => setFileName(e.target.value.replace(`C:\\fakepath\\`, "")) })} />
                    <button type='button' className="c-btn c-btn__secondary c-btn__upload"> {fileName}{IconsContent.Upload()}</button>
                </div>
            </div>
            <div className="input_wrapper">
                <label htmlFor="">Пароль</label>
                <input type="text" className={errors.password ? "input_wrapper-error" : ""}{...register("password", { required: "Заполните обязательное поле", })} />
                {errors.password && (<p className="input_wrapper-error">{errors.password.message}</p>)}
            </div>
            <button type="submit" className="c-btn c-btn__secondary">Войти</button>
        </form>
    )
}

export default AuthECP