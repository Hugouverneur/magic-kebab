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

    return (
        <div className="">
            <h2>Quelques sauces ? (2 sauces MAX)</h2>
            <button onClick={() => setBlanche((blanche)? false : true)}>
                <img alt="" src=""/>
                <p>Blanche</p>
            </button>
            <button onClick={() => setHarissa((harissa)? false : true)}>
                <img alt="" src=""/>
                <p>Harissa</p>
            </button>
            <button onClick={() => setAndalouse((andalouse)? false : true)}>
                <img alt="" src=""/>
                <p>Andalouse</p>
            </button>
            <button onClick={() => setBBQ((BBQ)? false : true)}>
                <img alt="" src=""/>
                <p>BBQ</p>
            </button>
            <button onClick={() => setKetchup((ketchup)? false : true)}>
                <img alt="" src=""/>
                <p>Ketchup</p>
            </button>
            <button onClick={() => setCurry((curry)? false : true)}>
                <img alt="" src=""/>
                <p>Curry</p>
            </button>
            <button onClick={() => selectSauces(selectedSauces)}>
                <p>Continuer</p>
            </button>
            <p>{tooManySauce}</p>
       </div>
    );
}

export default Sauce;