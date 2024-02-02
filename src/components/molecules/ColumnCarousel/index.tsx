import { ICarouselGroupItem } from "@/interfaces"

const ColumnCarousel = ({ firstImage, secondImage, thirdImage, animation }: ICarouselGroupItem) => {
    return (
        <div className="flex flex-col gap-inline-xxs">
            <div className={`flex flex-col gap-inline-xxs animate-[${animation.duration}_${animation.type}_infinite_linear]`}>
                <img src={firstImage.component} alt={firstImage.alt} className="w-full" />
                <img src={secondImage.component} alt={secondImage.alt} className="w-full" />
                <img src={thirdImage.component} alt={thirdImage.alt} className="w-full" />
            </div>
            <div className={`flex flex-col gap-inline-xxs animate-[${animation.duration}_${animation.type}_infinite_linear]`}>
                <img src={firstImage.component} alt={firstImage.alt} className="w-full" />
                <img src={secondImage.component} alt={secondImage.alt} className="w-full" />
                <img src={thirdImage.component} alt={thirdImage.alt} className="w-full" />
            </div>
        </div>
    )
}

export default ColumnCarousel