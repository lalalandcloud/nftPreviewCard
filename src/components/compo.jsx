import './compo.css'

function Card (){
    return(
        <>
            <div className='back'>
                <div className='cardAll'>
                    <div className='img'></div>
                    <div className='titre'>
                        <h4>Equilibrium #4653</h4>
                    </div>
                    <div className='text'>
                        <p>Our equilibrium collection promotes balance and calm.</p>
                    </div>
                    <div className='prix'>
                        <div className='prix2'>
                            <div className='logo'>
                            </div>
                            <div className='ppp'>
                                <p>0.0041 ETH</p>
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