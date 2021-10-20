import defaultKebab from '../../defaultKebab.json'
const DefaultKebab = ({ addToCheckout }) => {

    return (
        <div className="column_center">
            <h2>Notre sélection</h2>
            <div className="inline_blocks">
                <button className="block_btn" onClick={() => addToCheckout(defaultKebab.le_classique.kebab)}>
                    <img width="86px" alt="Le classique" src={require('../../assets/icons/pain.png').default}/>
                    Le classique
                </button>
                <button className="block_btn" onClick={() => addToCheckout(defaultKebab.le_vege.kebab)}>
                    <img width="86px" alt="Le vege" src={require('../../assets/icons/vege.png').default}/>
                    Le vege
                </button>
                <button className="block_btn" onClick={() => addToCheckout(defaultKebab.le_BBQ.kebab)}>
                    <img width="86px" alt="Le BBQ" src={require('../../assets/icons/bbq.png').default}/>
                    La BBQ
                </button>
            </div>
        </div>
    )
}

export default DefaultKebab;