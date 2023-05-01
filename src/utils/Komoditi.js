import React from 'react';
import Card from '../components/Card/Card';
// import './Komoditi.css'

const Komoditi = (props) => {
    return (
        <div className='komoditi_kontainer'>
            <div style={
                {
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    flexBasis: '30%', 
                }   
            }>
                {
                    props.komoditi && props.komoditi.map(item => {
                        return (
                            <Card key={item.id} komoditi={item}/>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Komoditi;
