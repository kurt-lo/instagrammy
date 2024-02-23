import Input from "../InputForm/Input"
import Button from "../Button/Button"

const LoginForm = () => {
  return (
    <>
      <Input type='text' placeholder='Email or username' />
      <Input type='password' placeholder='Password' />
      
    </>
  )
}

export default LoginForm