import "./Header.css"

export default function Header(){
    const img = "../../img/comida_4.svg"
    
    return(
        <div className='header'>
            <div>
                Healthy Food

            </div>
            <div>
                <nav>
                    <ul>
                        <li>Healthy Recipes</li>
                        <li>Blog</li>
                        <li>Join</li>
                        <li>Register</li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}