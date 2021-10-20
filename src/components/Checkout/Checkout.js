const Checkout = ({ checkout, deleteKebab, setQuantity, Order }) => {
    return (
        <div className="checkout_block">
            <h2>🛒 Mon panier</h2>
            <ul>
                {checkout.map(function(element) {
                    let kebab_string = `${element.kebab.type}, ${element.kebab.meat}`;

                    element.kebab.vegetables.forEach(vegetable => vegetable.isSelected ? kebab_string += ', '+vegetable.vegetableName : '')
                    element.kebab.sauces.forEach(sauce => sauce.isSelected ? kebab_string += ', '+sauce.sauceName : '')
                    
                    let minus_btn;
                    if(element.quantity > 1) {
                        minus_btn = <button className="basic_btn" onClick={() => setQuantity(element.id, -1)}>-</button>
                    }
                    return (
                        <li key={element.id} className="checkout_line">
                            <p>{kebab_string}</p>
                            <p>Quantité : {element.quantity} {minus_btn} <button className="basic_btn" onClick={() => setQuantity(element.id, 1)}>+</button></p>
                            <button className="basic_btn" onClick={() => deleteKebab(element.id)}>Supprimer</button>
                        </li>
                    )
                })}
            </ul>
            <button className="basic_btn" onClick={() => Order()}>Commander</button>
        </div>
    );
}

export default Checkout;