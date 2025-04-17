import Image from "next/image";
import first_image from '../../public/Utils/Images/1.png';
import second_image from '../../public/Utils/Images/2.png';
import third_image from '../../public/Utils/Images/3.png';
import fourth_image from '../../public/Utils/Images/4.png';
import fifth_image from '../../public/Utils/Images/5.png';
import sixth_image from '../../public/Utils/Images/6.png';
import seventh_image from '../../public/Utils/Images/7.png';
import eighth_image from '../../public/Utils/Images/8.png';
import ninth_image from '../../public/Utils/Images/9.png';
import tenth_image from '../../public/Utils/Images/10.png';
import eleventh_image from '../../public/Utils/Images/11.png';
import twelfth_image from '../../public/Utils/Images/12.jpg';
import thirteenth_image from '../../public/Utils/Images/13.png';

export default function ImageSlides() {
  const images = [first_image, second_image, third_image, fourth_image, fifth_image, sixth_image, seventh_image, eighth_image, ninth_image, tenth_image, eleventh_image, twelfth_image, thirteenth_image];

  return (
    <div className="flex flex-col w-full h-full max-h-1/3 items-center justify-start">
      <div className="bg-current w-full">
        <Image
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Mod Example"
        />
      </div>
    </div>
  )
}