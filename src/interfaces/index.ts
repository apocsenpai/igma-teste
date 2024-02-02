export interface ICarouselGroupItem {
  firstImage: {
    component: string;
    alt: string;
  };
  secondImage: {
    component: string;
    alt: string;
  };
  thirdImage: {
    component: string;
    alt: string;
  };
  animation: {
    duration: string;
    type: string;
  };
}

export interface IClientItem {
  component: string;
  alt: string;
}
