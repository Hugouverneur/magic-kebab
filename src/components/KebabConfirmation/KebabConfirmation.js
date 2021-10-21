const KebabConfirmation = ({kebab, kebabConfirmation, kebabAnnulation }) => {
    return (
        <div className="column_center">
            <h2>On récapitule</h2>
            <div className="inline_blocks">
                <div className="block_btn" key="kebab_type">
                    <img width="86px" alt={kebab.type} src={require('../../assets/icons/'+kebab.type.toLowerCase()+'.png').default}></img>
                    <p>{kebab.type}</p>
                </div>
                <div className="block_btn" key="kebab_meat">
                    <img width="86px" alt={kebab.meat} src={require('../../assets/icons/'+kebab.meat.toLowerCase()+'.png').default}></img>
                    <p>{kebab.meat}</p>
                </div>
                +
                <div key="kebab_vegetables" className="">
                    {kebab.vegetables.map(vegetable => (
                        (vegetable.isSelected)? 
                            <div className="block_btn" key={vegetable.vegetableName}>
                                <img width="86px" alt={vegetable.vegetableName} src={require('../../assets/icons/'+vegetable.vegetableName.toLowerCase()+'.png').default}></img>
                                <p>{vegetable.vegetableName}</p>
                            </div> 
                        : ''
                    ))}
                </div>
                +
                <div key="kebab_sauces" className="">
                    {kebab.sauces.map(sauce => (
                        (sauce.isSelected)?
                            <div className="block_btn" key={sauce.sauceName}>
                                <img width="86px" alt={sauce.sauceName} src={require('../../assets/icons/'+sauce.sauceName.toLowerCase()+'.png').default}></img>
                                <p>{sauce.sauceName}</p>
                            </div>
                        : ''
                    ))}
                </div>
            </div>
            <div key="confirmation_button">
                <button className="basic_btn" onClick={() => kebabConfirmation(kebab)}>Ajouter au panier</button>
                <button className="basic_btn" onClick={() => kebabAnnulation()}>Annuler</button>
            </div>
        </div>
    )
}

export default KebabConfirmation;


