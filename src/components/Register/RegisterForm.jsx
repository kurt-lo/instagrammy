import { Input } from "@material-tailwind/react";

const RegisterForm = () => {
  return (
    <>
      <div className="grid gap-2 w-72">
        <Input label="Email " color="white" />
        <Input label="Username " color="white" />
        <Input label="Full Name " color="white" />
        <Input label="Password" type="password" color="white" />
      </div>
    </>
  )
}

export default RegisterForm