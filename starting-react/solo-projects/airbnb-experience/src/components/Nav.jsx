import airbnb from '../assets/airbnb 1.svg'
export default function Nav() {
    return (
        <a href="https://airbnb.com" target="_blank">
            <img src={airbnb} className="logo airbnb" alt="airbnb logo" />
        </a>
    )
}