import "./Header.scss"

export default function Header(){
    return(
        <div className='header'>
            <div className='header-container'>
                <div className='header-container-logo'>
                    <h1 className='header-container-logo-h1'>Healthy Food</h1>
                </div>
                <div className='header-container-list'>
                    <nav className='header-container-list-nav'>
                        <ul className='header-container-list-nav-ul'>
                            <li>HEALTHY RECIPES</li>
                            <li>BLOG</li>
                            <li>JOIN</li>
                            <li id='li-register'>REGISTER</li>
                        </ul>
                    </nav>
                </div>
            </div>  
        </div>
    )
}