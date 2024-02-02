
import IntroImage from '@/components/molecules/IntroImage';
import Onboarding from '@/components/molecules/Onboarding';

const Introduction = () => {
    return (
        <section
            className="flex flex-col items-center gap-stack-xxl
                  lg:h-[504px] lg:px-stack-xxxl lg:flex-row-reverse lg:items-start lg:justify-center
                  xl:h-[680px] xl:gap-stack-xxxl xl:px-40
                  2xl:h-[780px] 2xl:gap-40 2xl:px-72
                  animate-fadeUp
                  "
        >
            <Onboarding />
            <IntroImage />
        </section>
    )
}

export default Introduction;