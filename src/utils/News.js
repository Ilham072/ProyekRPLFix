import React from 'react';
//import news from '../config/news/news.json';
import CardNews from '../components/Card/News/CardNews';

const News = ({news}) => {
    return (
        <div style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flexBasis: '15%'
                
            }
        }>
            {
                news && news.map(item => {
                    return (
                        <CardNews key={item.id} news={item}/>
                    )
                })
            }

        </div>
    )
}

export default News;