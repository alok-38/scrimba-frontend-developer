import phoneIcon from "../assets/images/phone-icon.png";
import mailIcon from "../assets/images/mail-icon.png";

export default function Contact({ img, name, phone, email }) {
    return (
        <div className="contact-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt="phone icon" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} alt="mail icon" />
                <p>{email}</p>
            </div>
        </div>
    )
}
