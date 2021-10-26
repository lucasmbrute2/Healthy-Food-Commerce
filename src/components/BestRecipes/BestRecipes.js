import food1 from "../../img/comida_1.svg"
import food2 from "../../img/comida_2.svg"
import food3 from "../../img/comida_3.svg"
import food4 from "../../img/comida_4.svg"
import "./BestRecipes.scss" 

export default function BestRecipes(){
    return(
        <div className='bestRecipes'>
            <div className='bestRecipes-title'>
                <h2 className='bestRecipes-title-h2'>Our Best Recipes</h2>
                <p className='bestRecipes-title-p'>Far far away, behind the word mountains, far from the coutries</p>
                <p className='bestRecipes-title-p bestRecipes-title-p-bottom '>Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className='bestRecipes-container' style={{ margin:'0 auto'}}>
                <div className='bestRecipes-container-div'>
                    <div className='bestRecipes-container-div-img'>
                        <img src={food1} alt='Food' className='teste-img'/>
                    </div>
                    
                    <div className='bestRecipes-container-div-h2'>
                        <h2 className='bestRecipes-h2'>Broccoli Saladwith Bacon</h2>
                        <button className='bestRecipes-button'>See Recipe</button>
                    </div>
                </div>
                
                <div className='bestRecipes-container-div'>
                    <div className='bestRecipes-container-div-img'>
                        <img src={food2} alt='Food'/>
                    </div>
                    
                    <div className='bestRecipes-container-div-h2'>
                        <h2 className='bestRecipes-h2'>Classic BeefBurgers</h2>
                        <button className='bestRecipes-button'>See Recipe</button>
                    </div>
                </div>
                
                <div className='bestRecipes-container-div'>
                    <div className='bestRecipes-container-div-img'>
                        <img src={food3} alt='Food'/>
                    </div>
                    
                    <div className='bestRecipes-container-div-h2'>
                        <h2 className='bestRecipes-h2'>Classic Potato Salad</h2>
                        <button className='bestRecipes-button'>See Recipe</button>
                    </div>
                </div>
                
                <div className='bestRecipes-container-div'>
                    <div className='bestRecipes-container-div-img'>
                        <img src={food4} alt='Food'/>
                    </div>
                    
                    <div className='bestRecipes-container-div-h2'>
                        <h2 className='bestRecipes-h2'>Cherry Cobbleron the Grill</h2>
                        <button className='bestRecipes-button'>See Recipe</button>
                    </div>
                </div>

            </div>
        </div>
    )
}