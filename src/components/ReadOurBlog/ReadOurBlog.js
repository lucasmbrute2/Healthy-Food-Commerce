import './ReadOurBlog.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import food1 from "../../img/blog_image_1.svg"
import food2 from '../../img/bloco_image_2.svg'
import food3 from "../../img/bloco_image_3.svg"
import food4 from "../../img/bloco_image_4.svg"

export default function ReadOurBlog(){

    return(
        <div >
            <Carousel
            showThumbs = {false}
            width='30%'
            infiniteLoop = {true}
            interval= {3000}
            showIndicators= {false}
            
            >
            <div>
                <img src={food1}/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            <div>
                <img src={food2}/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            <div>
                <img src={food3}/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            <div>
                <img src={food4}/>
                <p>Quick-start guide<br/>to nuts and seeds</p>
            </div>
            
            </Carousel>
        </div>
    ) 
}