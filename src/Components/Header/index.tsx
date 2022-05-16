import './Header.scss'

const Header = () => {
    return(
        <>
        <header>
            <a href="/" className="logo"><b>TODO</b> Cliente</a>
            <nav className="header-right">
            <a href="/cadastrar" className='add'>+ Cadastrar</a>
            <a href="/lista">Lista</a>
            </nav>
        </header>
        </>
    )
}

export default Header