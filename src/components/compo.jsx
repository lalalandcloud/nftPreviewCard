import './compo.css';
import vu from "../assets/images/icon-view.svg"

function Card (){
    return(
        <>
            <div className='back'>
                <div className='cardAll'>
                    <div className='img'>
                        <div className="invisible">
                            <img src={vu} alt="" /> 
                        </div>
                    </div>
                    <div>
                        <h4 className='titre'>Equilibrium #4653</h4>
                    </div>
                    <div className='text'>
                        <p>Our equilibrium collection promotes balance and calm.</p>
                    </div>
                    <div className='prix'>
                        <div className='prix2'>
                            <div className='logo'>
                            </div>
                            <div>
                                <p className='ppp'>0.0041 ETH</p>
                            </div>
                        </div>
                        <div className='prix2'>
                            <div className='icon'></div>
                            <div>
                                <p>3 days left</p>
                            </div>
                        </div>
                    </div>
                    <div className='createur'>
                        <div className='creaP'></div>
                        <div><p>Creation of <span>Jules Wyvern</span></p></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card