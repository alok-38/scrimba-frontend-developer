import Whisker from "../assets/images/mr-whiskerson.png"
import phone from "../assets/images/phone-icon.png"
import mail from "../assets/images/mail-icon.png"

export default function Whiskerson() {
    return (
        <div className="w-64 bg-lime-50 shadow-lime-500/50">
            <img className="whisker rounded-xl" src={Whisker} alt="Whiskerson" />
            <h3>Whisker</h3>
            <p><img src={phone} alt="phone icon" />(212) 555-1234</p>
            <p><img src={mail} alt="mail icon" />thecat@hotmail.com</p>
        </div>
    )
}

