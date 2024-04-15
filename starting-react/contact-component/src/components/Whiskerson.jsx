import WhiskersonCat from '../assets/images/mr-whiskerson.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Whiskerson() {
    return (
        <div>
            <img src={WhiskersonCat} alt='WhiskersonCat'></img>
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