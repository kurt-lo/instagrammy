
const Button = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`bg-[#0095D8] hover:bg-blue-400 rounded-md w-[70%] text-slate-200 text-[14px] py-[.4rem] ${className}`}>{children}</button>
    )
}

export default Button