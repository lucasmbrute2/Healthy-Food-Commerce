import food1 from "../../img/comida_1.svg"
import food2 from "../../img/comida_2.svg"
import food3 from "../../img/comida_3.svg"
import food4 from "../../img/comida_4.svg"
import "./BestRecipes.scss" 
export default function BestRecipes(){
    return(
        <div className='bestRecipes'>
            <div>
                <h2>Our Best Recipes</h2>
                <p>Far far away, behind the word mountains, far from the coutries</p>
                <p>Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div>
                <div>
                    <div className='teste'>
                        <img src={food1} alt='Food' className='teste-img'/>
                    </div>
                    
                    <div>
                        <h2>Broccoli Saladwith Bacon</h2>
                        <button>See Recipe</button>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={food2} alt='Food'/>
                    </div>
                    
                    <div>
                        <h2>Classic BeefBurgers</h2>
                        <button>See Recipe</button>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={food3} alt='Food'/>
                    </div>
                    
                    <div>
                        <h2>Classic BeefBurgers</h2>
                        <button>See Recipe</button>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={food4} alt='Food'/>
                    </div>
                    
                    <div>
                        <h2>Cherry Cobbleron the Grill
</h2>
                        <button>See Recipe</button>
                    </div>
                </div>

            </div>
        </div>
    )
}