import "./Footer.scss"

export default function Footer(){
    const copyrightSymbol = "\u00a9"
    
    return(
        <footer className='footer'>
                <div className='footer-container'>
                    <p className='footer-container-p'>{copyrightSymbol} Copyrights 2019 Stack. All Rights Reserved. </p>
                </div>
                
                <div className='footer-container'>
                    <p className='footer-container-p footer-container-p-privacy'>Privacy Policy </p>
                    <p className='footer-container-p footer-container-p-privacy'>Terms and Conditions</p>
                </div>

        </footer>
    ) 
}