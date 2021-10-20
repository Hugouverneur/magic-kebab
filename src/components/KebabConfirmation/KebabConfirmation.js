const KebabConfirmation = ({kebab, kebabConfirmation }) => {
    return (
        <div>
            <h2>On récapitule</h2>
            <div>{kebab.type}</div>
            <div>{kebab.meat}</div>
            <ul>
                {kebab.vegetables.map(vegetable => (
                    (vegetable.isSelected)? <li key={vegetable.vegetableName}>{vegetable.vegetableName}</li> : ''
                ))}
            </ul>

            <ul>
                {kebab.sauces.map(sauce => (
                    (sauce.isSelected)? <li key={sauce.sauceName}>{sauce.sauceName}</li> : ''
                ))}
            </ul>
            <button className="basic_btn" onClick={() => kebabConfirmation(kebab)}>Commander</button>
        </div>
    )
}

export default KebabConfirmation;


