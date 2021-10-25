import "./Footer.scss"

export default function Footer(){
    const copyrightSymbol = "\u00a9"
    
    return(
        <footer>
            <div>
                <p>{copyrightSymbol} Copyrights 2019 Stack. All Rights Reserved. </p>
            </div>
            
            <div>
                <p>Privacy Policy </p>
                <p>Terms and Conditions</p>
            </div>
        </footer>
    ) 
}