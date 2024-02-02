import { InputHTMLAttributes } from "react"


const Input = ({ placeholder }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="mt-stack-md h-stack-lg w-full outline-none border-b-thin border-b-base-dark-main font-semibold text-base-dark-main placeholder:text-base-dark-main"
            placeholder={placeholder}
        />
    )
}

export default Input