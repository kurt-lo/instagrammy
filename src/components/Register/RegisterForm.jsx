import { useState } from "react";
import { Input, Button, IconButton, Alert } from "@material-tailwind/react";
import useRegisterUserWithEmailAndPassword from "../hooks/useRegisterUserWithEmailAndPassword";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const RegisterForm = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const { loading, error, registerWithEmailAndPassword } = useRegisterUserWithEmailAndPassword()

  // const handleRegisterButton = async () => {
  //   try {
  //     await registerWithEmailAndPassword(email, username, fullName, password);
  //     window.location.href('/login')
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //   }
  // }

  return (
    <>
      <div className="grid gap-2 w-72">
        <Input value={email} label="Email " color="white" onChange={(e) => setEmail(e.target.value)} />
        <Input value={username} label="Username " color="white" onChange={(e) => setUsername(e.target.value)} />
        <Input value={fullName} label="Full Name " color="white" onChange={(e) => setFullName(e.target.value)} />
        <div className="relative flex">
          <Input
            value={password}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            color="white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconButton className="flex justify-center items-center !absolute right-1 top-1" variant="text" size="sm" color="white"
            onClick={() => setShowPassword(prevState => !prevState)}
          >
            {showPassword ? (
              <LuEye className="cursor-pointer" size={15} />
            ) : (
              <LuEyeOff className="cursor-pointer" size={15} />
            )}
          </IconButton>
        </div>
        {error && <Alert color="red" className="text-sm">{error.message}</Alert>}
        <Button size='sm' type='submit' className='mt-[1rem] font-[500] w-72' color='blue'
          loading={loading}
          onClick={() => registerWithEmailAndPassword(email, username, fullName, password)}
        >
          Sign up
        </Button>
      </div>
    </>
  )
}

export default RegisterForm