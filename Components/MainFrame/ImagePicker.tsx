import img1 from '../../Utils/Images/1.png';
import img2 from '../../Utils/Images/2.png';
import img3 from '../../Utils/Images/3.png';
import img4 from '../../Utils/Images/4.png';
import img5 from '../../Utils/Images/5.png';
import img6 from '../../Utils/Images/6.png';
import img7 from '../../Utils/Images/7.png';
import img8 from '../../Utils/Images/8.png';
import img9 from '../../Utils/Images/9.png';
import img10 from '../../Utils/Images/10.png';
import img11 from '../../Utils/Images/11.png';
import img12 from '../../Utils/Images/12.jpg';
import img13 from '../../Utils/Images/13.png';
import Image from 'next/image';

const ImagePicker = () => {
    const images = [
        img1,img2,img3,img4,img5,
        img6,img7,img8,img9,img10,
        img11,img12,img13
    ]
    const rndInt = Math.floor(Math.random() * 13) + 0
    const image = images[rndInt];
    return <Image src={image} alt=''/>;
};

export default ImagePicker;