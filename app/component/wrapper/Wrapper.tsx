import { spawn } from 'child_process';
import React from 'react'
import IconsContent from '../../icons/IconsContent';

interface Props {
    children: React.ReactNode;
    title?: string;
}

const Wrapper: React.FC<Props> = ({ children }) => {
    const langArr = ['Kаз', 'Рус']
    const [language, setLanguage] = React.useState(1)
    // const [languageSeleted, setLanguageSelected] = React.useState(false)

    return (
        <div className='wrapper'>
            {children}
            <div className='wrapper__right'>
                <div className='wrapper__right-container'>
                    <p className='language'>
                        {langArr.map((item, index) => <span className={index == language ? "langSelected" : ""} key={index} onClick={() => setLanguage(index)}>{item}</span>)}
                    </p>
                    <p >{IconsContent.Sail()}</p>
                </div>
                <p className='wrapper__header'>Добро пожаловать!</p>
                <p className='wrapper__content'>Парус-КАЗ.Бюджет» – единая учетная система финансово-экономических процессов государственных органов и казенных предприятий.</p>

            </div>
        </div>
    )
}

export default Wrapper