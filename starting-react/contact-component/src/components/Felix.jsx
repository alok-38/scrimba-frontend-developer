import FelixCat from '../assets/images/felix.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Felix() {
    return (
        <div>
            <img src={FelixCat} alt='Felix'></img>
            <h3 className='font-bold my-5'>Mr. Felix</h3>
            <div className="flex gap-2 items-center">
                <FaPhoneAlt />
                <p>(212) 555-1234</p>
            </div>
            <div className="flex gap-2 items-center">
                <IoMail />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )   
}