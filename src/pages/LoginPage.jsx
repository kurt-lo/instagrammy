import igLogo from '../assets/images/logo.png'
import playstore from '../assets/images/playstore.png'
import microsoft from '../assets/images/microsoft.png'
import { Link } from 'react-router-dom'
import LoginForm from '../components/Login/LoginForm'
import { useState } from 'react'
import RegisterForm from '../components/Register/RegisterForm'
import LoginGoogle from '../components/Login/LoginGoogle';

const LoginPage = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className='grid place-items-center mt-[10rem]'>
                <div className='flex flex-col justify-center items-center border rounded-sm py-[2rem] min-w-[25rem]'>
                    <img className='filter invert' src={igLogo} alt="Instagram Logo" />
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                    <div className="flex items-center justify-center w-[70%] my-5">
                        <div className="flex-2 w-full h-[1px] bg-gray-300"></div>
                        <span className="mx-[1rem] text-sm text-gray-500">OR</span>
                        <div className="flex-2 w-full h-[1px] bg-gray-300"></div>
                    </div>
                    <LoginGoogle isLogin={isLogin} />
                </div>
                <div className='flex justify-center items-center gap-2 text-sm border rounded-sm mt-[1rem] py-[1rem] min-w-[25rem]'>
                    <span className='text-white'>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
                    <span className='text-blue-600 cursor-pointer'
                        onClick={() => setIsLogin(prevState => !prevState)}
                    >{isLogin ? "Sign up" : "Log in"}</span>
                </div>
                <div className='py-[1rem]'>
                    <span className='text-sm text-white'>Get the app.</span>
                </div>
                <div className='flex items-center justify-center gap-[1rem]'>
                    <Link to='https://play.google.com/store/apps/details?id=com.instagram.android' target='_blank'>
                        <img src={playstore} className='h-10' alt="Playstore" />
                    </Link>
                    <Link to='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-7%2C0%2C1230%2C1039' target='_blank'>
                        <img src={microsoft} className='h-10' alt="Microsoft Store App" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LoginPage