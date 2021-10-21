import defaultKebab from '../../defaultKebab.json'

const FatKebab = ({ addToCheckout }) => { 
    document.body.style = 'background: black;'
    document.getElementsByClassName("header")[0].children[1].hidden = false
    document.getElementsByClassName("header")[0].children[0].hidden = true
    
    return (
        <div className="column_center">
            <h2 className="easter-content">Fat Kebabs.onion (hébergeur darkweb.onion)</h2>
            <div className="inline_blocks">
                <button className="block_btn_fat" onClick={() => addToCheckout(defaultKebab.le_18.kebab)}>
                    <img width="300px" alt="bigkebab" src={require('../../assets/icons/18.jpeg').default}/>
                    <h3 className="easter-content">Le -18</h3>
                    <p className="easter-content">3 Pots de sauces blanche ont été utilisé sur ce kebab 😋😋😋</p>
                </button>

                <button className="block_btn_fat" onClick={() => addToCheckout(defaultKebab.human_kebab.kebab)}>
                    <img width="300px" alt="bigkebab" src={require('../../assets/icons/human-kebab.png').default}/>
                    <h3 className="easter-content">The Human Kebab</h3>
                    <p className="easter-content">Fait la taille d'un humain, (si mangé en entier repartez avec 4 désserts)</p>
                </button>
      
                <button className="block_btn_fat" onClick={() => addToCheckout(defaultKebab.cholesterole.kebab)}>
                    <img width="300px" alt="bigkebab" src={require('../../assets/icons/huileux.jpeg').default}/>
                    <h2 className="easter-content">Le Huileux Cholestérole</h2>
                    <p className="easter-content">Contient 5x la proportion de viande et de sauce normal</p>
                    <p className="easter-content">Trempé dans 500 mL d'huile de palme (sans légumes car ce n'est pas bon)</p>
                </button>
            </div>
       </div>
    )
}

export default FatKebab;
