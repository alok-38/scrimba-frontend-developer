import Felix from "./Felix";
import Whiskerson from './Whiskerson';
import Pumpkin from './Pumpkin';
import Fluffykins from './Fluffykins';

export default function Contacts() {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            <Felix />
            <Whiskerson />
            <Pumpkin />
            <Fluffykins />
        </div>
    )
}