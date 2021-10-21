import React, {useState} from 'react';

const Sauce = ({selectSauces, tooManySauce}) => {

    const [blanche, setBlanche] = useState(false);
    const [harissa, setHarissa] = useState(false);
    const [andalouse, setAndalouse] = useState(false);
    const [BBQ, setBBQ] = useState(false);
    const [ketchup, setKetchup] = useState(false);
    const [curry, setCurry] = useState(false);
    
    let selectedSauces = [
        {
            sauceName: "Blanche",
            isSelected: blanche
        },
        {
            sauceName: "Harissa",
            isSelected: harissa
        },
        {
            sauceName: "Andalouse",
            isSelected: andalouse
        },
        {
            sauceName: "BBQ",
            isSelected: BBQ
        },
        {
            sauceName: "Ketchup",
            isSelected: ketchup
        },
        {
            sauceName: "Curry",
            isSelected: curry
        },
    ]

    let blanche_style, harissa_style, anda_style, bbq_style, ketchup_style, curry_style = '#e4d2b6';

    (blanche)? blanche_style = '#e4d2b6' : blanche_style = '#FFF6D6';
    (harissa)? harissa_style = '#e4d2b6' : harissa_style = '#FFF6D6';
    (andalouse)? anda_style = '#e4d2b6' : anda_style = '#FFF6D6';
    (BBQ)? bbq_style = '#e4d2b6' : bbq_style = '#FFF6D6';
    (ketchup)? ketchup_style = '#e4d2b6' : ketchup_style = '#FFF6D6';
    (curry)? curry_style = '#e4d2b6' : curry_style = '#FFF6D6';

    return (
        <div className="column_center">
            <h2>Quelques sauces ? (2 sauces MAX)</h2>
            <div className="inline_blocks">
                <button style={{backgroundColor: blanche_style}} className="block_btn" onClick={() => setBlanche((blanche)? false : true)}>
                    <img width="86px" alt="sauce blanche" src={require('../../assets/icons/blanche.png').default} />
                    <p>Blanche</p>
                </button>
                <button style={{backgroundColor: harissa_style}} className="block_btn" onClick={() => setHarissa((harissa)? false : true)}>
                    <img width="86px" alt="sauce harissa" src={require('../../assets/icons/harissa.png').default} />
                    <p>Harissa</p>
                </button>
                <button style={{backgroundColor: anda_style}} className="block_btn" onClick={() => setAndalouse((andalouse)? false : true)}>
                    <img width="86px" alt="sauce andalouse" src={require('../../assets/icons/andalouse.png').default} />
                    <p>Andalouse</p>
                </button>
                <button style={{backgroundColor: bbq_style}} className="block_btn" onClick={() => setBBQ((BBQ)? false : true)}>
                    <img width="86px" alt="sauce bbq" src={require('../../assets/icons/sbbq.png').default} />
                    <p>BBQ</p>
                </button>
                <button style={{backgroundColor: ketchup_style}} className="block_btn" onClick={() => setKetchup((ketchup)? false : true)}>
                    <img width="86px" alt="ketchup" src={require('../../assets/icons/ketchup.png').default} />
                    <p>Ketchup</p>
                </button>
                <button style={{backgroundColor: curry_style}} className="block_btn" onClick={() => setCurry((curry)? false : true)}>
                    <img width="86px" alt="sauce curry" src={require('../../assets/icons/curry.png').default} />
                    <p>Curry</p>
                </button>
            </div>
            <button className="continu_btn" onClick={() => selectSauces(selectedSauces)}>
                <p>Continuer</p>
            </button>
            <p>{tooManySauce}</p>
       </div>
    );
}

export default Sauce;