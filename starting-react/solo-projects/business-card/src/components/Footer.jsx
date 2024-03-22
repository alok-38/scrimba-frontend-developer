import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Corrected import path
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <div className="flex justify-center  bg-slate-950 text-orange-500 w-80">
            <ul className='flex gap-5 mt-10'>
                <li><button><FontAwesomeIcon icon={faTwitter} /></button></li>
                <li><button><FontAwesomeIcon icon={faFacebook} /></button></li>
                <li><button><FontAwesomeIcon icon={faInstagram} /></button></li>
                <li><button><FontAwesomeIcon icon={faGithub} /></button></li>
            </ul>
        </div>
    )
}
