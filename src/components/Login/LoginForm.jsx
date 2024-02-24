import { Input, Button, Alert } from "@material-tailwind/react";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading, error, loginWithEmailAndPassword } = useLogin()

  return (
    <>
      <div className="grid gap-2 w-72">
        <Input value={email} label="Email or username" color="white"
          onChange={(e) => setEmail(e.target.value)} />
        <Input value={password} label="Password" type="password" color="white"
          onChange={(e) => setPassword(e.target.value)} />
        {error && <Alert color="red">{error.message}</Alert>}
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