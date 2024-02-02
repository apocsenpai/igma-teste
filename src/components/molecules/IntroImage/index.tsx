import BlockImage from '@/assets/vetorImage.svg';
import Vulcan from '@/assets/vulcan.png';

const IntroImage = () => {
    return <div className="relative pl-inline-xxs lg:pl-0 lg:self-stretch">
        <img
            src={BlockImage}
            alt="Decorative block"
            className="absolute top-1/2 -translate-y-1/2 -translate-x-inline-xxxs"
        />
        <img
            src={Vulcan}
            alt="Vulcanic eruption like Igma feelings."
            className="h-[560px] lg:h-full lg:w-[304px] xl:w-auto"
        />
    </div>
}

export default IntroImage