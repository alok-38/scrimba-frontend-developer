import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Corrected import path
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <div className="flex justify-center items-center bg-blue text-orange-500">
            <ul>
                <li><button><FontAwesomeIcon icon={faTwitter} /></button></li>
                <li><button><FontAwesomeIcon icon={faFacebook} /></button></li>
                <li><button><FontAwesomeIcon icon={faInstagram} /></button></li>
                <li><button><FontAwesomeIcon icon={faGithub} /></button></li>
            </ul>
        </div>
    )
}
