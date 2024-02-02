import { ButtonHTMLAttributes } from "react";

const Button = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="mt-stack-lg px-inline-xxxs py-3 bg-base-dark-main text-base-light-contrast font-semibold opacity-90">
            {children}
        </button>
    )
}

export default Button;