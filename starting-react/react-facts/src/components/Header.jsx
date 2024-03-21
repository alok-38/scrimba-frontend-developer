import reactLogo from '../assets/react.svg'
export default function Header() {
    return (
        <header>
            <nav>
                <a href='https://react.dev'><img src={reactLogo} className="logo react" alt="React logo" /></a>
                <h3>ReactFacts</h3>
                <h4 className='float-right'>React Course - Project 1</h4>
            </nav>
        </header>
    )
}