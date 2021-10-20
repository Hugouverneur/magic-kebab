const Loader = () => {
    return (
        <div className="column_center">
            <img alt="loader" src={require('../../assets/img/panoramix.gif').default}/>
            <h2>👨‍🍳 Nous préparons votre commande...</h2>
        </div>
    );
}

export default Loader;
