import "./Header.scss"
import { Link } from "react-router-dom"
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
                            <Link to='/register' style={{ textDecoration: 'none' }}>
                                <li id='li-register'>REGISTER</li>
                            </Link>
                        </ul>
                    </nav>
                </div>

            </div>  
            <div className='page-container'>
                <div className='page-container-div'>
                    <h2 className='page-container-div-h2'>Ready for</h2>
                    <h2 className='page-container-div-h2'>Trying a new</h2>
                    <h2 className='page-container-div-h2'>recipe?</h2>
                </div>
                
                <div className='page-container-div'>
                    <input placeholder='Search healthy recipes' className='page-container-div-input'></input>
                    <i class="fas fa-search" id='icon-search'></i>
                </div>
            </div>
        </div>
    )
}