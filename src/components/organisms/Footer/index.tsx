import SmallText from "@/components/atoms/SmallText"

const Footer = () => {
    return (
        <footer className="pb-stack-xxl px-inline-xxs lg:px-inline-sm xl:px-inline-xl 2xl:px-36">
            <div className="flex flex-col gap-stack-nano border-t-hairline border-base-dark-highlight pt-stack-sm lg:flex-row lg:justify-between lg:items-center">
                <SmallText>
                    Igma Delightful Digital Products Company.
                </SmallText>
                <SmallText>
                    © Copyright 2023
                </SmallText>
            </div>
        </footer>
    )
}

export default Footer