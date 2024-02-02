import { HTMLAttributes } from "react"

const Description = ({ children }: HTMLAttributes<HTMLParagraphElement>) => {
    return <p className=" text-xs font-semibold leading-lg xl:text-md 2xl:text-lg">
        {children}
    </p>
}

export default Description