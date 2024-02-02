import { ICarouselGroupItem } from "@/interfaces"

const RowCarousel = ({ firstImage, secondImage, thirdImage }: ICarouselGroupItem) => {
    return (
        <div className="inline-flex gap-inline-xxs pl-inline-xxs">
            <img src={firstImage.component} alt={firstImage.alt} className="max-w-stack-huge" />
            <img src={secondImage.component} alt={secondImage.alt} className="max-w-stack-huge" />
            <img src={thirdImage.component} alt={thirdImage.alt} className="max-w-stack-huge" />
        </div>
    )
}

export default RowCarousel