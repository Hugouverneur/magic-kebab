import '../../App.css';

const KebabType = ({selectKebab, checkout}) => {
    return (
        <div className="column_center">
            <h2>Pain ou galette ?</h2>
            <div className="inline_blocks">
                <button className="block_btn" onClick={() => selectKebab('Pain')}>
                    <img width="86px" alt="pain" src={require('../../assets/icons/pain.png').default}/>
                    <p>Pain</p>
                </button>
                <button className="block_btn" onClick={() => selectKebab('Galette')}>
                    <img width="86px" alt="galette" src={require('../../assets/icons/galette.png').default}/>
                    <p>Galette</p>
                </button>
            </div>
       </div>

    );
}

export default KebabType;