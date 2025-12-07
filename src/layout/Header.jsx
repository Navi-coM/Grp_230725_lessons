import './Header.css'

const Header = () => {
    const menuItems = [
        'Home',
        'About',
        'Portflio',
        'Contacts'
    ]
    return (
        <>
            <header className="header">
                <ul className="menu">
                    {menuItems.map((item) => <li>{item}</li>)}
                </ul>
            </header>
        </>
    )
}

export default Header