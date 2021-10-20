import React, {useState} from 'react';

const Vegetables = ({selectVegetables}) => {

    const [salade, setSalade] = useState(false);
    const [tomate, setTomate] = useState(false);
    const [oignon, setOignon] = useState(false);

    let selectedVegetables = [
        {
            vegetableName: "Salade",
            isSelected: salade
        },
        {
            vegetableName: "Tomate",
            isSelected: tomate
        },
        {
            vegetableName: "Oignon",
            isSelected: oignon
        }
    ]

    let salade_style, tomate_style, oignon_style = '#e4d2b6';

    (salade)? salade_style = '#e4d2b6' : salade_style = '#FFF6D6';
    (tomate)? tomate_style = '#e4d2b6' : tomate_style = '#FFF6D6';
    (oignon)? oignon_style = '#e4d2b6' : oignon_style = '#FFF6D6';


    return (
        <div className="column_center">
            <h2>Salade, Tomates, Oignons ?</h2>
            <div className="inline_blocks">
                <button style={{backgroundColor: salade_style}} className="block_btn" onClick={() => setSalade((salade)? false : true)}>
                    <img width="86px" alt="salade" src={require('../../assets/icons/salade.png').default} />
                    <p>Salade</p>
                </button>
                <button style={{backgroundColor: tomate_style}} className="block_btn" onClick={() => setTomate((tomate)? false : true)}>
                    <img width="86px" alt="Tomate" src={require('../../assets/icons/tomate.png').default} />
                    <p>Tomates</p>
                </button>
                <button style={{backgroundColor: oignon_style}} className="block_btn" onClick={() => setOignon((oignon)? false : true)}>
                    <img width="86px" alt="Oignon" src={require('../../assets/icons/oignon.png').default} />
                    <p>Oignons</p>
                </button>
            </div>
            <button className="continu_btn" onClick={() => selectVegetables(selectedVegetables)}>
                <p>Continuer</p>
            </button>
       </div>
    );
}

export default Vegetables;