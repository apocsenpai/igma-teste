import Description from "@/components/atoms/Description";
import ClientList from "@/components/molecules/ClientList";

const Clients = () => {
    return (
        <section
            className="w-full flex flex-col items-center gap-stack-sm px-inline-xxs
                  lg:px-inline-sm lg:flex-row lg:items-center lg:justify-between lg:gap-24
                  xl:px-inline-xl
                  2xl:px-36 2xl:h-[800px]
                  "
        >
            <div className="lg:w-1/3">
                <Description>
                    Expressamos mais de 20 anos de experiência criando plataformas
                    digitais para as maiores empresas do Brasil, impactando milhões de
                    pessoas.
                </Description>
            </div>
            <ClientList />
        </section>
    )
}

export default Clients;