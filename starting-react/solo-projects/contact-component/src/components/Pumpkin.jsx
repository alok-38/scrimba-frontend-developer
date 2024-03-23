import PumpkinCat from "../assets/images/pumpkin.png"
import phone from "../assets/images/phone-icon.png"
import mail from "../assets/images/mail-icon.png"

export default function Pumpkin() {
    return (
        <div>
            <img className="pumpkinCat" src={PumpkinCat} alt="pumpkinCat" />
            <h3>PumpkinCat</h3>
            <p><img src={phone} alt="phone icon" />(212) 555-1234</p>
            <p><img src={mail} alt="mail icon" />thecat@hotmail.com</p>
        </div>
    )
}

