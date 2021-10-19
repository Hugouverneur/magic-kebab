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
        <div className="">
            <h2>Salade, Tomates, Oignons ?</h2>
            <button /*style={(salade)? 'border: solide 2px green' : ''}*/ className="" onClick={() => setSalade((salade)? false : true)}>
                <img alt="" src=""/>
                <p>Salade</p>
            </button>
            <button /*style={(tomate)? 'border: solide 2px green' : ''}*/ onClick={() => setTomate((tomate)? false : true)}>
                <img alt="" src=""/>
                <p>Tomates</p>
            </button>
            <button /*style={(oignon)? 'border: solide 2px green' : ''}*/ onClick={() => setOignon((oignon)? false : true)}>
                <img alt="" src=""/>
                <p>Oignons</p>
            </button>
            <button onClick={() => selectVegetables(selectedVegetables)}>
                <p>Continuer</p>
            </button>
       </div>
    );
}

export default Vegetables;