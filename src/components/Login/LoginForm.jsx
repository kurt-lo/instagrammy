import { Input } from "@material-tailwind/react";

const LoginForm = () => {
  return (
    <>
      <div className="grid gap-2 w-72">
        <Input label="Email or username" color="white" />
        <Input label="Password" type="password" color="white" />
      </div>
    </>
  )
}

export default LoginForm