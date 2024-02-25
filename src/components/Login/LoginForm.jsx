import { Input, Button, Alert, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, loginWithEmailAndPassword , showAlert, alertMessage } = useLogin()

  return (
    <>
      <div className="grid gap-2 w-72">
        <Input value={email} label="Email or username" color="white"
          onChange={(e) => setEmail(e.target.value)} />
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
        {showAlert && <Alert color="red" className="text-sm">{alertMessage}</Alert>}
        {error && <Alert color="red" className="text-sm">{'Invalid Email or Password' || error.message}</Alert>}
        <Button size='sm' type='submit' className='mt-[1rem] font-[500] w-72' color='blue'
          loading={loading}
          onClick={() => loginWithEmailAndPassword(email, password)}>
          Log in
        </Button>
      </div>
    </>
  )
}

export default LoginForm