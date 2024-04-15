import FelixCat from '../assets/images/felix.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Felix() {
    return (
        <div>
            <img src={FelixCat} alt='Felix'></img>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <FaPhoneAlt />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <IoMail />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )   
}