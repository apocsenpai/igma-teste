import { HTMLAttributes } from "react"

const SmallText = ({ children }: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className="text-xxs font-semibold leading-lg xl:text-xs">
            {children}
        </p>

    )
}

export default SmallText