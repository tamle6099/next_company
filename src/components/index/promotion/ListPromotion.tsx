/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
function SampleNextArrow(props :any) {
  const { style, onClick } = props;
  return (
    <div
      className="z-10"
      style={{ ...style, display: "block", position:" absolute",width: "20%",left: "80%",height: "100%", top:"0", cursor:"url(/share/icon-cursor.svg), auto" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props :any) {
  const { style, onClick } = props;
  return (
    <div
      className="z-10"
      style={{ ...style, display: "block", position:" absolute",width: "20%",left: "0",height: "100%",cursor:"url(/share/icon-cursor-left.svg), auto" }}
      onClick={onClick}
    />
  );
}

const ListPromotion = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
 
  return (

    <div className="pt-5 relative max-w-[1580px] left-[18.5%]">
    <Slider {...settings}>
      <div className="pr-4">
      <div className="promotion bg-white">
      <div className="img">
        <img src="/share/slider-1.png" alt="" />
      </div>
      <div className="p-3">
        <a className="text-sm bg-text-black font-medium" href="">
        Optimize Your Workspace In New Year. Here’s Gift 30% Off From One IBC
        </a>
        <p className="text-[12px] mt-2">On special occasion Lunar New Year 2018. OneIBC gives you the great chance 30% discount for the Services office in the following.</p>
      </div>
     </div>
      </div>
      <div className="pr-4">
      <div className="promotion bg-white">
      <div className="img">
        <img src="/share/slider-1.png" alt="" />
      </div>
      <div className="p-3">
        <a className="text-sm bg-text-black font-medium" href="">
        Optimize Your Workspace In New Year. Here’s Gift 30% Off From One IBC
        </a>
        <p className="text-[12px] mt-2">On special occasion Lunar New Year 2018. OneIBC gives you the great chance 30% discount for the Services office in the following.</p>
      </div>
     </div>
      </div>
      <div className="pr-4">
      <div className="promotion bg-white">
      <div className="img">
        <img src="/share/slider-1.png" alt="" />
      </div>
      <div className="p-3">
        <a className="text-sm bg-text-black font-medium" href="">
        Optimize Your Workspace In New Year. Here’s Gift 30% Off From One IBC
        </a>
        <p className="text-[12px] mt-2">On special occasion Lunar New Year 2018. OneIBC gives you the great chance 30% discount for the Services office in the following.</p>
      </div>
     </div>
      </div>
      <div className="pr-4">
      <div className="promotion bg-white">
      <div className="img">
        <img src="/share/slider-1.png" alt="" />
      </div>
      <div className="p-3">
        <a className="text-sm bg-text-black font-medium" href="">
        Optimize Your Workspace In New Year. Here’s Gift 30% Off From One IBC
        </a>
        <p className="text-[12px] mt-2">On special occasion Lunar New Year 2018. OneIBC gives you the great chance 30% discount for the Services office in the following.</p>
      </div>
     </div>
      </div>
      <div className="pr-4">
      <div className="promotion bg-white">
      <div className="img">
        <img src="/share/slider-1.png" alt="" />
      </div>
      <div className="p-3">
        <a className="text-sm bg-text-black font-medium" href="">
        Optimize Your Workspace In New Year. Here’s Gift 30% Off From One IBC
        </a>
        <p className="text-[12px] mt-2">On special occasion Lunar New Year 2018. OneIBC gives you the great chance 30% discount for the Services office in the following.</p>
      </div>
     </div>
      </div>
      <div className="pr-4">
      <div className="promotion bg-white">
      <div className="img">
        <img src="/share/slider-1.png" alt="" />
      </div>
      <div className="p-3">
        <a className="text-sm bg-text-black font-medium" href="">
        Optimize Your Workspace In New Year. Here’s Gift 30% Off From One IBC
        </a>
        <p className="text-[12px] mt-2">On special occasion Lunar New Year 2018. OneIBC gives you the great chance 30% discount for the Services office in the following.</p>
      </div>
     </div>
      </div>
     
      
    </Slider>
  </div>

  );
};


export { ListPromotion };
