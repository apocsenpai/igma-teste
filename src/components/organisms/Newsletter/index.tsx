import { phoneImageList } from '@/utils';
import ColumnCarousel from '@/components/molecules/ColumnCarousel';
import RowCarousel from '@/components/molecules/RowCarousel';
import NewsLetterForm from '@/components/molecules/NewsLetterForm';

const Newsletter = () => {


    return (
        <section
            className="w-full flex flex-col gap-stack-xxl
                  lg:flex-row lg:items-center lg:justify-between lg:gap-[100px] lg:px-inline-sm lg:h-[680px]
                  xl:h-[800px] xl:px-inline-xl
                  2xl:px-36  2xl:h-[800px]"
        >
            <NewsLetterForm/>
            <div className="overflow-hidden whitespace-nowrap lg:hidden">
                <div className="inline-block animate-slideToLeft">{phoneImageList.map(imageGroup => <RowCarousel key={imageGroup.firstImage.component} {...imageGroup} />)}</div>
                <div className="inline-block animate-slideToLeft">{phoneImageList.map(imageGroup => <RowCarousel key={imageGroup.firstImage.component} {...imageGroup} />)}</div>
            </div>
            <div className="hidden self-start lg:flex lg:h-full gap-inline-xxs px-inline-xxxs lg:overflow-y-hidden">
                {phoneImageList.map(imageGroup => <ColumnCarousel key={imageGroup.firstImage.component} {...imageGroup} />)}
            </div>
        </section>
    )
}

export default Newsletter;