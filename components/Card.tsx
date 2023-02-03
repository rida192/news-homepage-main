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
    <div className="flex gap-[25px]">
      <Image src={image} width={100} height={128} alt="labtop" />
      {/* {image.icon} */}
      <div>
        <p className="text-[25px] text-GrayishBlue font-bold">{number}</p>
        <h3 className="text-[19px] text-VeryDarkBlue font-bold">{title}</h3>
        <p className="text-DarkGrayishBlue md:max-w-[223px]">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
