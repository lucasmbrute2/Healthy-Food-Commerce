import './MemberShip.scss'

export default function MemberShip(){
    return(
        <div className='memberShip'>
            <div>
                <div>
                    <h2>
                    Join our membership to get special offer
                    </h2>
                </div>
                <div>
                    <input placeholder='Enter your email address'></input>
                    <input type='submit' value='Join'></input>
                </div>
            </div>
        </div>
    )
}