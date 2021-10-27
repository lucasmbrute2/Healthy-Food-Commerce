import './ReadOurBlog.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import food1 from "../../img/blog_image_1.svg"
import food2 from '../../img/bloco_image_2.svg'
import food3 from "../../img/bloco_image_3.svg"
import food4 from "../../img/bloco_image_4.svg"

export default function ReadOurBlog(){

    return(
        <div className='readOurBlog' >
            <div style={{ marginTop: '3rem' }}>


            <div className='readOurBlog-title' >
                    <h2 className='readOurBlog-title-h2'>
                        Read Our Blog
                    </h2>
                <p className='readOurBlog-title-p'>Far far away, behind the word mountains,  far from the countries </p>
                <p className='readOurBlog-title-p readOurBlog-title-p-bottom'>Vokalia and Consonantia, there live the blind texts.</p>
            </div>
                
        
            <Carousel className='carousel'
            showThumbs = {false}
            width='30%'
            infiniteLoop = {true}
            interval= {3000}
            showIndicators= {false}
            
            >
            <div className='carousel-div'>
                <img src={food1} alt='food'/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            <div className='carousel-div'>
                <img src={food2} alt='food'/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            <div className='carousel-div'>
                <img src={food3} alt='food'/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            <div className='carousel-div'>
                <img src={food4} alt='food'/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            
            </Carousel>
        </div>
        </div>
    ) 
}