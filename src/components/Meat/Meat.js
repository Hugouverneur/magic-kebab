const Meat = ({selectMeat}) => {
    return (
        <div className="column_center">
            <h2>Viande ou Tofu ?</h2>
            <div className="inline_blocks">
                <button className="block_btn" onClick={() => selectMeat('Viande')}>
                    <img width="86px" alt="viande" src={require('../../assets/icons/viande.png').default} />
                    <p>Viande</p>
                </button>
                <button className="block_btn" onClick={() => selectMeat('Tofu')}>
                    <img width="86px" alt="tofu" src={require('../../assets/icons/tofu.png').default} />
                    <p>Tofu</p>
                </button>
            </div>
       </div>
    );
}

export default Meat;