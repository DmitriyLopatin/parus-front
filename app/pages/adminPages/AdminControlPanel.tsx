import React, { FC } from 'react'
import IconsContent from '../../icons/IconsContent'
import Select from 'react-select';

interface Catalogs {
  id:number;
  name:string;
  region:string
  }
  interface LastActions {
    id:number;
    full_name:string;
    action:string
}
interface Options {
  value:string;
  label:string
}

interface Props  {
  catalogs:Array<Catalogs>;
  lastActions:Array<LastActions>;
  options:Array<Options>
}

const AdminControlPanel:FC<Props> = ({ catalogs, lastActions, options }) => {
  
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
      margin: "15px 0",
      maxWidth: "60%"
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "10px",
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
    <div className='control-panel'>
      <h2>Панель управления</h2>
      <div className='control-panel__welcome'>
        <p>ДОБРО ПОЖАЛОВАТЬ</p>
        <p>Данный дэшборд содержит все необходимые показатели для полноценной работы.</p>
      </div>
      <div className='control-panel__statistics'>
        <h2>Данных отправлено</h2>
       <div>
          <p>
            <span>445</span>
            <span>Всего</span>
          </p>
          <p>
            <span>140</span>
            <span>за год</span>
          </p>
          <p>
            <span>10</span>
            <span>за месяц</span>
          </p>
          <p>
            <span>3</span>
            <span>за сегодня</span>
          </p>
       </div>
      </div>
      <div className='control-panel__statistics2'>
          <p>
            <span style={{color:'#FF993C'}}>45</span>
            <span>пользователей</span>
          </p>
          <p>
            <span style={{color: `#2a87de`}}>12</span>
            <span>новых пользователей</span>
          </p>
          <p>
            <span style={{color: `#25c352`}}>60</span>
            <span>Администраторов</span>
          </p>
      </div>
      <div className='control-panel__short'>
          <div className='control-panel__short--item'>
              <div className='control-panel__short--header'>
                <p>Справочник <span>Добавить {IconsContent.Add()}</span></p>
                <p>Все {IconsContent.ArrowRight()}</p>
              </div>
              <Select
                  // classNamePrefix={"custom-select"}
                  classNamePrefix={"custom-select"}
                  placeholder={"Выберите"}
                  options={options}
                  styles={customStyles}
                />
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>НАИМЕНОВАНИЕ</td>
                    <td>РЕГИОН</td>
                  </tr>
                </thead>
                <tbody>
                  {catalogs.map((item,index)=>{
                    return(<tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.region}</td>
                    </tr>)
                  })}
                </tbody>
              </table>
          </div>
          <div className='control-panel__short--item'>
              <div className='control-panel__short--header'>
                <p>Последние действия пользователей</p>
                <p>Все {IconsContent.ArrowRight()}</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>ФИО</td>
                    <td>ДЕЙСТВИЕ</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {lastActions.map((item,index)=>{
                    return(<tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.full_name}</td>
                      <td>{item.action}</td>
                      <td>{IconsContent.Details()}</td>
                    </tr>)
                  })}
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default AdminControlPanel