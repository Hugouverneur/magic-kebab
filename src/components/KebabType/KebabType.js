const KebabType = ({selectKebab, checkout}) => {
    return (
        <div className="">
            <h2>Pain ou galette ?</h2>
            <button className="" onClick={() => selectKebab('Pain')}>
                <img alt="" src=""/>
                <p>Pain</p>
            </button>
            <button onClick={() => selectKebab('Galette')}>
                <img alt="" src=""/>
                <p>Galette</p>
            </button>
       </div>

    );
}

export default KebabType;