import Whisker from "../assets/images/mr-whiskerson.png"
import phone from "../assets/images/phone-icon.png"
import mail from "../assets/images/mail-icon.png"

export default function Whiskerson() {
    return (
        <div>
            <img className="whisker" src={Whisker} alt="Whiskerson" />
            <h3>Whisker</h3>
            <p><img src={phone} alt="phone icon" />(212) 555-1234</p>
            <p><img src={mail} alt="mail icon" />thecat@hotmail.com</p>
        </div>
    )
}

