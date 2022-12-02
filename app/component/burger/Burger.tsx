import React, { useEffect } from 'react'
import { useAsideShortContext } from '../../utils/context'



const Burger = () => {

    const {asideShort} = useAsideShortContext()
    console.log(asideShort)
    

    useEffect(()=>{
      // console.log(asideShort)
    },[])

  return (
    <div className={!asideShort[0]?"burger":"burger burger__active"} onClick={()=>asideShort[1](!asideShort[0])}>
        <p className='burger-first'></p>
        <p className='burger-second'></p>
        <p className='burger-third'></p>
    </div>
  )
}
export default Burger