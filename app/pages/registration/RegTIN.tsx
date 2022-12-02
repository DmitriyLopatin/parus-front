import React from 'react'
import { useState } from 'react'
import { useForm, Controller} from "react-hook-form";
import IconsContent from "../../icons/IconsContent"
import { yupResolver } from "@hookform/resolvers/yup"
import { SendMessageSheme } from '../../services/validation';
import ReactTooltip from "react-tooltip";
import Select from 'react-select';
import InputMask from 'react-input-mask'

type FormValues = {
    tin: number;
    password: string;
    upload: any
    password_ecp: string
    full_name: string
    name_of_institution: string
    region: string
    email: string
    phone: string
    repeat_password: string
  };
  interface Option {
    value:string
    label: string
}
interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}
const options:Option[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const RegTIN:React.FC = () => {

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>({ mode: "onBlur", resolver: yupResolver(SendMessageSheme) });
  
  const onSubmit1 = (authData: any) => {

    console.log(authData)
    // reset();
  };
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      fontSize: "14px",
      padding: "10px",

    }),
    control: (provided: any) => ({
      ...provided,
      minHeight: 0,
      fontSize: "14px",
      lineHeight: "14px",
      padding: 0,
      margin: 0
    }),
    container: (provided: any) => ({
      ...provided,
      fontSize: "14px",
      lineHeight: "14px",
      padding: 0,
      margin: 0
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "15px",
      fontSize: "14px",
    }),
    input: (provided: any) => ({
      ...provided,
      fontSize: "14px",
      lineHeight: "14px",
      padding: 0,
      margin: 0
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "14px",
    }),


  };

  return (
    <form className="authForm" onSubmit={handleSubmit(onSubmit1)}>
            <div className="input_wrapper">
              <label htmlFor="">ИИН/БИН</label>
              <input type="text" className={errors.tin ? "input_wrapper-error" : ""}{...register("tin")} />
              {errors.tin && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.tin.message}</p>)}
            </div>
            <div className="input_wrapper">
              <label htmlFor="">ФИО</label>
              <input type="text" className={errors.full_name ? "input_wrapper-error" : ""}{...register("full_name")} />
              {errors.full_name && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.full_name.message}</p>)}
            </div>
            <div className="input_wrapper">
              <label htmlFor="">Наименование учреждения</label>
              <Controller
                name={"name_of_institution"}
                control={control}
                rules={{ required: "Выберите поле" }}
                render={({ field }) => 
                <Select
                  {...field}
                  // classNamePrefix={"custom-select"}
                  classNamePrefix={errors.name_of_institution ? "custom-select-error" : "custom-select"}
                  placeholder={"Выберите"}
                  //@ts-ignore
                  options={options}
                  styles={customStyles}
                />} />
              {errors.name_of_institution && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.name_of_institution.message}</p>)}
            </div>
            <div className="input_wrapper">
              <label htmlFor="">Регион</label>
              <Controller
                name={"region"}
                control={control}
                rules={{ required: "Выберите поле" }}
                render={({ field }) => 
                <Select
                  {...field}
                  // classNamePrefix={"custom-select"}
                  classNamePrefix={errors.region ? "custom-select-error" : "custom-select"}
                  placeholder={"Выберите"}
                  //@ts-ignore
                  options={options}
                  styles={customStyles}
                />} />
              {errors.region && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.region.message}</p>)}
            </div>
           
            <div className="input_wrapper">
              <label htmlFor="">Адрес электронной почты</label>
              <input type="text" className={errors.email ? "input_wrapper-error" : ""}{...register("email",)} />
              {errors.email && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.email.message}</p>)}
            </div>
            <div className="input_wrapper">
              <label htmlFor="">Телефон</label>
              <InputMask type="tel" mask="+7 (999) 999-99-99" placeholder="+7 (___) ___-__-__" {...register("phone")} />
              {errors.phone && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.phone.message}</p>)}
            </div>
            <div className="input_wrapper">
              <label htmlFor="">Пароль</label>
              <input type="text" data-tip data-for="registerTip" className={errors.password ? "input_wrapper-error" : ""}{...register("password",)} />
              {errors.password && (<p className="input_wrapper-error">{IconsContent.Error()}{errors.password.message}</p>)}
              <ReactTooltip id="registerTip" place="right" effect="solid" backgroundColor="#F7F8FD" className='tooltip'>
                <ul>
                  <li>Длина пароля должна быть не менее 8, но не более 15 символов</li>
                  <li>В числе символов пароля обязательны должны присутствовать буквенные символы (необходимо использовать буквы в верхнем и нижнем регистре), цифры и (или) специальные символы ( #, @, $ и другие)</li>
                  <li>Пароль не должен включать в себя легко вычисляемые сочетания символов, а также стандартное расположение букв на клавиатуре (1,2,3, 123321, qwerty и т.д.), кроме пробела</li>
                </ul>
              </ReactTooltip>
            </div>
            <div className="input_wrapper">
              <label htmlFor="">Подтвердите пароль</label>
              <input type="text" className={errors.repeat_password ? "input_wrapper-error" : ""}{...register("repeat_password")} />
              {errors.repeat_password && (<p className="input_wrapper-error">{errors.repeat_password.message}</p>)}
            </div>
            <button type="submit" className="c-btn c-btn__secondary">Зарегистрировать</button>
          </form>
  )
}

export default RegTIN