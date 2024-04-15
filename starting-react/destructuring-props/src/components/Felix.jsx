import FelixCat from '../assets/images/felix.png'; // Importing the image directly (if you need to do so)

export default function Felix(props) {
    const { img, name } = props.person;

    return (
        <div>
            <img src={FelixCat} alt='Cat'></img>
            <h3>{name}</h3>
        </div>
    )
}

// Define the person object outside of the component
export const person = {
    img: "../assets/images/felix.png", // Using require for the image path
    name: "Mr. Felix",
    phone: "(800) 555-1234",
    email: "mr.felix@catnap.meow"
}
