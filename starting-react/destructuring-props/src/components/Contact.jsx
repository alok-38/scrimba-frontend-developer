import Felix from './Felix';
import { person } from './Felix';

export default function Contact() {
    return (
        <div>
            <Felix person={person} />
        </div>
    );
}