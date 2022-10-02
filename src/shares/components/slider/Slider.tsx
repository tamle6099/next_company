import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  draggable: true,
};
const SliderList = () => (
  <Slider {...settings}>
    <div className='item-slide p-5'>
      <img src="/share/vtv.png" />
    </div>
    <div className='item-slide'>
      <img src="/share/thanhnien.png" />
    </div>
    <div className='item-slide '>
      <img src="/share/tuoitre.png" />
    </div>
    <div className='item-slide'>
      <img src="/share/vnexpress.png" />
    </div>
    <div className='item-slide'>
      <img src="/share/dantri.png" />
    </div>
    <div className='item-slide'>
      <img src="/share/cafef.png" />
    </div>

  </Slider>
);

export { SliderList };
