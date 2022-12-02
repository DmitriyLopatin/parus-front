import React, { useEffect, useState } from 'react'
import IconsContent from '../../icons/IconsContent'

type Props = {
  checkedAll: boolean
}

const Checkbox:React.FC<Props> = ({checkedAll}) => {

    const [checked, setChecked] = useState<boolean>(checkedAll)
    
    useEffect(()=>{
        setChecked(checkedAll)
    },[checkedAll])
  return (
    <p className={ checked?'checkbox checkbox__checked':'checkbox'} onClick={()=>setChecked(!checked)}>{IconsContent.Checked()}</p>
  )
}

export default Checkbox