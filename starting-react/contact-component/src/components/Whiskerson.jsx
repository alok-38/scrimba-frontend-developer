import WhiskersonCat from '../assets/images/mr-whiskerson.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Whiskerson() {
    return (
        <div className='border-2 rounded-xl shadow-2xl w-80 p-10'>
            <img src={WhiskersonCat} alt='WhiskersonCat'></img>
            <h3 className='font-bold my-5'>Mr. Whiskerson</h3>
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