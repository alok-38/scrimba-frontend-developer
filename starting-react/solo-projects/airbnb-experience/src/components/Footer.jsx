import image12 from '../assets/image 12.png';
import wedding from '../assets/wedding-photography 1.png'
import bike from '../assets/mountain-bike 1.png'
import FooterDescription1 from './sub/FooterDescription1';
import FooterDescription2 from './sub/FooterDescription2';
import FooterDescription3 from './sub/FooterDescription3';

export default function Footer() {
    return (
        <div>
            <img src={image12} alt="image 12" />
            <FooterDescription1 />
            <img src={wedding} alt="wedding" />
            <FooterDescription2 />
            <img src={bike} alt="bike" />
            <FooterDescription3 />
        </div>
    )
}