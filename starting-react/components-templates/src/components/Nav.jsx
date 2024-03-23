export default function Nav() {
    return (
        <nav className="bg-orange-400 p-5 text-white">
            <h3 className="float-left">Ninja Blog</h3>
            <ul className="flex justify-end gap-10">
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}