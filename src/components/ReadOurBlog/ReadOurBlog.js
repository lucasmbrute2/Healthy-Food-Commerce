import './ReadOurBlog.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import food1 from "../../img/blog_image_1.svg"
import food2 from '../../img/bloco_image_2.svg'
import food3 from "../../img/bloco_image_3.svg"
import food4 from "../../img/bloco_image_4.svg"

export default function ReadOurBlog(){
    
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    }

    return(
        <div className='readOurBlog' >
            <div style={{ marginTop: '2rem' }}>
                <div   div className='readOurBlog-title' >
                        <h2 className='readOurBlog-title-h2'>
                            Read Our Blog
                        </h2>
                    <p className='readOurBlog-title-p'>Far far away, behind the word mountains,  far from the countries </p>
                    <p className='readOurBlog-title-p readOurBlog-title-p-bottom'>Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                    
            
                <Carousel className='carousel'
                responsive={responsive}
                swipeable={true}
                draggable={false}
           
                
                >
                <div className='carousel-div'>
                    <div className='teste'>
                        <img src={food1} alt='food' className='carousel-div-img'/>
                        <p className='carousel-div-p'>Quick-start guide<br/>to nuts and seeds</p>

                    </div>
                </div>
                <div className='carousel-div'>
                    <img src={food2} alt='food' className='carousel-div-img'/>
                    <p className='carousel-div-p'>Quick-start guide<br/>to nuts and seeds</p>
                </div>
                <div className='carousel-div'>
                    <img src={food3} alt='food' className='carousel-div-img'/>
                    <p className='carousel-div-p'>Quick-start guide<br/>to nuts and seeds</p>
                </div>
                <div className='carousel-div'>
                    <img src={food4} alt='food' className='carousel-div-img'/>
                    <p className='carousel-div-p'>Quick-start guide<br/>to nuts and seeds</p>
                </div>
                
                </Carousel>
            </div>
        </div>
    ) 
}