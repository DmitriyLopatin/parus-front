import type { NextPage} from 'next'
import Wrapper from '../../app/component/wrapper/Wrapper'
import Registration from '../../app/pages/registration/Registration'


const RegistrationPage: NextPage = () => {
  return (
    <Wrapper>
      <Registration/>
    </Wrapper>
  )
}

export default RegistrationPage