import PumpkinCat from '../assets/images/pumpkin.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Pumpkin() {
    return (
        <div className='border-2 rounded-xl shadow-2xl w-80 p-10'>
            <img src={PumpkinCat} alt='Felix'></img>
            <h3 className='font-bold my-5'>Mr. Pumpkin</h3>
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