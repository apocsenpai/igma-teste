import IgmaLogo from '@/assets/logotipoIgma.svg';
import Description from '@/components/atoms/Description';

const Onboarding = () => {
    return <div className="px-inline-xxs flex-1 lg:px-0">
        <header className="flex gap-inline-nano items-center xl:gap-inline-xxxs">
            <p className="text-xxs leading-sm font-medium xl:text-xs 2xl:text-md">
                Prazer, somos
            </p>
            <img src={IgmaLogo} alt="Igma - Delightful digital products." />
        </header>
        <p className="pt-stack-xl pb-stack-xs text-lg font-semibold leading-sm text-base-dark-highlight xl:text-xl 2xl:text-xxl">
            Acreditamos em um mundo onde experiências incríveis são
            essenciais.
        </p>
        <Description>
            Unimos design e tecnologia para resolver problemas complexos de
            empresas. Criamos produtos digitais que revolucionam o
            relacionamento entre empresas e consumidores.
        </Description>
    </div>
}

export default Onboarding