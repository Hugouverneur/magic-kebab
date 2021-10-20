const Checkout = ({ checkout, deleteKebab, setQuantity }) => {
    return (
        <div className="header">
            <h2>Mon panier</h2>
            <ul>
                {checkout.map(function(element) {
                    let kebab_string = `${element.kebab.type}, ${element.kebab.meat}`;

                    element.kebab.vegetables.forEach(vegetable => vegetable.isSelected ? kebab_string += ', '+vegetable.vegetableName : '')
                    element.kebab.sauces.forEach(sauce => sauce.isSelected ? kebab_string += ', '+sauce.sauceName : '')
                    
                    let minus_btn;
                    if(element.quantity > 1) {
                        minus_btn = <button onClick={() => setQuantity(element.id, -1)}>-</button>
                    }
                    return (
                        <div>
                            <li key={'id' + element.id}>{kebab_string}</li>
                            <li key={'qte' + element.id}>Quantité : {element.quantity} {minus_btn} <button onClick={() => setQuantity(element.id, 1)}>+</button></li>
                            <button onClick={() => deleteKebab(element.id)}>Supprimer</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default Checkout;