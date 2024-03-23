import FelixCat from "../assets/images/felix.png"
import phone from "../assets/images/phone-icon.png"
import mail from "../assets/images/mail-icon.png"

export default function Felix() {
    return (
        <div className="w-64">
            <img className="felix rounded-md" src={FelixCat} alt="Felix" />
            <h3>Felix</h3>
            <p><img src={phone} alt="phone icon" />(212) 555-1234</p>
            <p><img src={mail} alt="mail icon" />thecat@hotmail.com</p>
        </div>
    )
}

