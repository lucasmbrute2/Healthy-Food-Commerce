import './MemberShip.scss'

export default function MemberShip(){
    return(
        <div className='memberShip'>
            <div className='memberShip-container'>
                <div className='memberShip-container-div'>
                    <h2 className='memberShip-container-div-h2'>
                    Join our membership <br/>to get special offer
                    </h2>
                </div>
                <div>
                    <input placeholder='Enter your email address' className='page-container-div-input'></input>
                    <input type='submit' value='Join'className='page-container-div-input-submit' ></input>
                </div>
            </div>
        </div>
    )
}