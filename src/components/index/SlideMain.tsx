import { Submit } from "../../shares/components/button/Submit";

const SlideMain = () => {
  return (
    <>
      <div className="bg_slide">
        <style jsx>{`
          .bg_slide {
            background: url(/share/banner.jpg);
            height: 32vw;
            width: 100vw;
            background-repeat: no-repeat;
          }
        `}</style>
        <div className="container mx-auto">
          <div className="slider-event-item px-2 container">
            <div className=" ">
              <div className="detail inside inside-right pt-[6rem] max-w-lg">
                <h2 className="title bg_fs-40  font-medium text-white">
                  Lorem ipsum dolor
                </h2>
                <h3 className="content text-2xl font-medium text-white py-3">
                  {" "}
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-white text-base font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit.
                </p>
              </div>
              <div className="pt-10 pb-[150px]">
                <Submit title={"Button CTA"} width={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SlideMain };
