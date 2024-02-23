import Input from "../InputForm/Input"
import Button from "../Button/Button"

const RegisterForm = () => {
  return (
    <>
      <Input type='text' placeholder='Email' />
      <Input type='text' placeholder='Username' />
      <Input type='text' placeholder='Full Name' />
      <Input type='password' placeholder='Password' />
    </>
  )
}

export default RegisterForm