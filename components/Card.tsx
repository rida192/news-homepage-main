import { StaticImageData } from "next/image";
import Image from "next/image";

interface CardProps {
  image: StaticImageData;
  number: string;
  title: string;
  paragraph: string;
}

const Card = ({ image, number, title, paragraph }: CardProps) => {
  return (
    <div className="flex gap-[25px] group cursor-pointer ">
      <div className="overflow-hidden">
        {/* {image.icon} */}
        <Image
          className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-200 min-h-full  object-cover"
          src={image}
          width={100}
          height={128}
          alt="labtop"
        />
      </div>
      <div className="flex-1">
        <p className="text-[25px] text-GrayishBlue font-bold">{number}</p>
        <h3 className="text-[19px] text-VeryDarkBlue font-bold   transition-all duration-200 group-hover:text-SoftRed">
          {title}
        </h3>
        <p className="text-DarkGrayishBlue md:max-w-[223px]">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
