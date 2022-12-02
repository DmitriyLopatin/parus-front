import React from 'react'
import {default as ReactSelect, GroupBase, StylesConfig} from 'react-select'


interface ISelectOption{
    value:string;
    label:string
}
interface SelectProps{
    options: ISelectOption[]
    styles?: Partial<StylesConfig<ISelectOption, false, GroupBase<ISelectOption>>>
    value?:ISelectOption
    onChange?:any
}

const Select: React.FC<SelectProps> = ({options,value, styles,onChange}) => {
  return (
    <ReactSelect 
    options={options}
    placeholder={"Выберите"}
    value={value}
    styles={styles}
    classNamePrefix={"custom-select"}
    onChange={e=>onChange(e?.value)}

    />

  )
}
export default Select