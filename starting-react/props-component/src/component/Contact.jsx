import whiskerson from '../assets/images/images/mr-whiskerson.png';
import phone from '../assets/images/images/phone-icon.png';
import mail from '../assets/images/images/mail-icon.png';

export default function Contact() {
    return (
        <div className="contact-card">
            <img src={whiskerson} alt="Mr. Whiskerson" />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phone} alt="Phone" />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mail} alt='mail' />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}