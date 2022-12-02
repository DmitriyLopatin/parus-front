import React from 'react'
import { useForm, Controller } from "react-hook-form";
import IconsContent from '../../icons/IconsContent';
import DatePickerInput from '../dataPicker/DataPicker';

type FormValues = {
    name: string;
    date: string;
    info: string

};

const Form = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({ mode: "onBlur" });

    const onSubmit1 = (authData: any) => {
        console.log(authData)
    };
    return (
        <form className="authForm" onSubmit={handleSubmit(onSubmit1)}>
            <div className="input_wrapper">
                <label htmlFor="">Наименование</label>
                <input type="text" className={errors.name ? "input_wrapper-error" : ""}{...register("name")} />
                {errors.name && <p className="input_wrapper-error">{IconsContent.Error()}{errors.name.message}</p>}
            </div>

            <div className="input_wrapper">
                <label htmlFor="">Дата создания</label>
                <DatePickerInput name={"date"} control={control} placeholder={''} active={false} date={''} nameFrom={''} nameTill={''} />
                {errors.date && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.date.message}</p>)}
            </div>

            <div className="input_wrapper">
                <label htmlFor="">Другие сведения</label>
                <textarea className={errors.info ? "input_wrapper-error" : ""}{...register("info")} />
                {errors.info && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.info.message}</p>)}
            </div>
            <div className='modal__btns'>
                <button className='c-btn c-btn__secondary'>Добавить</button>
                <button className='c-btn c-btn__green' >Добавить и сохранить</button>
              </div>
        </form>
    )
}

export default Form