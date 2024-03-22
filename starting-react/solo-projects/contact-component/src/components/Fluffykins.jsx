import Fluffy from "../assets/images/fluffykins.png"
import phone from "../assets/images/phone-icon.png"
import mail from "../assets/images/mail-icon.png"

export default function Fluffykins() {
    return (
        <div className="fluffy">
            <img src={Fluffy} alt="fluffy" />
            <h3>Fluffy</h3>
            <p><img src={phone} alt="phone icon" />(212) 555-1234</p>
            <p><img src={mail} alt="mail icon" />thecat@hotmail.com</p>
        </div>
    )
}

