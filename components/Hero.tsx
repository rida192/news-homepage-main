import React from "react";
import HeroImage from "../public/assets/images/image-web-3-desktop.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[30px] md:mt-[56px]">
      <div className="container flex flex-col md:flex-row gap-[64px] md:gap-[21px]">
        {/* left side */}
        <div className="basis-[62.5%]">
          <Image
            className=""
            src={HeroImage}
            width={800}
            height={600}
            // fill={true}
            alt="hero image"
          />
          {/* the bright future of web 3 */}
          <div className="flex flex-col md:flex-row justify-between pt-[30px] gap-[25px]">
            <h2 className="text-[40px] md:text-[56px] max-w-[300px] md:max-w-[296px] font-extrabold text-VeryDarkBlue leading-[53px]">
              The Bright Future of Web 3.0
            </h2>
            <div className="">
              <p className="max-w-[335px] text-DarkGrayishBlue ">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it realy fulfilling its promise?
              </p>
              <button className="mt-[30px] md:mt-[40px] p-[20px] bg-SoftRed text-white font-bold tracking-[4px] uppercase hover:bg-VeryDarkBlue transition-all duration-200">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className=" pb-[39px] px-[22px] md:px-[26px] bg-VeryDarkBlue pt-[29px] md:pt-[37px] flex-1 [&>h3:hover]:text-SoftOrange [&>h3:hover]:cursor-pointer [&>h3]:transition-all [&>h3]:duration-200">
          <h2 className="text-[26px] text-SoftOrange font-bold mb-[43px]">
            New
          </h2>
          <h3 className="text-[19px] font-bold text-white">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-GrayishBlue border-b border-GrayishBlue pb-[34px]">
            will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <h3 className="mt-[34px] text-[19px] font-bold text-white">
            The Downsides of AI Artistry
          </h3>
          <p className="text-GrayishBlue border-b border-GrayishBlue pb-[34px]">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <h3 className=" mt-[34px] text-[19px] font-bold text-white">
            Is VC Funding Drying up?
          </h3>
          <p className="text-GrayishBlue  ">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
