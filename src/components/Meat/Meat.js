const Meat = ({selectMeat}) => {
    return (
        <div className="">
            <h2>Viande ou Tofu ?</h2>
            <button className="" onClick={() => selectMeat('Viande')}>
                <img alt="" src=""/>
                <p>Viande</p>
            </button>
            <button onClick={() => selectMeat('Tofu')}>
                <img alt="" src=""/>
                <p>Tofu</p>
            </button>
       </div>
    );
}

export default Meat;