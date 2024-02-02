import Button from "@/components/atoms/Button";
import Description from "@/components/atoms/Description";
import Input from "@/components/atoms/Input";

const NewsLetterForm = () => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="px-inline-xxs lg:px-0 lg:w-3/4"
        >
            <p className="text-xxs font-medium leading-sm xl:text-xs 2xl:text-md pb-stack-md">
                Assine nossa newsletter
            </p>
            <Description>
                Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a
                cada 15 dias.
            </Description>
            <Input placeholder='Nome' />
            <Input placeholder='Email' />
            <Button>
                Assinar Newsletter
            </Button>
        </form>
    )
}

export default NewsLetterForm;