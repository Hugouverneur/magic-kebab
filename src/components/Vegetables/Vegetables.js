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
    return (
        <div className="column_center">
            <h2>Salade, Tomates, Oignons ?</h2>
            <div className="inline_blocks">
                <button /*style={(salade)? 'border: solide 2px green' : ''}*/ className="block_btn" onClick={() => setSalade((salade)? false : true)}>
                    <img width="86px" alt="salade" src={require('../../assets/icons/salade.png').default} />
                    <p>Salade</p>
                </button>
                <button /*style={(tomate)? 'border: solide 2px green' : ''}*/ className="block_btn" onClick={() => setTomate((tomate)? false : true)}>
                    <img width="86px" alt="Tomate" src={require('../../assets/icons/tomate.png').default} />
                    <p>Tomates</p>
                </button>
                <button /*style={(oignon)? 'border: solide 2px green' : ''}*/ className="block_btn" onClick={() => setOignon((oignon)? false : true)}>
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