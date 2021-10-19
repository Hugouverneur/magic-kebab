import defaultKebab from '../../defaultKebab.json'
const DefaultKebab = ({ addToCheckout }) => {

    return (
        <div>
            <button onClick={() => addToCheckout(defaultKebab.le_classique.kebab)}>Le classique</button>
            <button onClick={() => addToCheckout(defaultKebab.le_vege.kebab)}>Le vege</button>
            <button onClick={() => addToCheckout(defaultKebab.le_BBQ.kebab)}>La BBQ</button>
        </div>
    )
}

export default DefaultKebab;