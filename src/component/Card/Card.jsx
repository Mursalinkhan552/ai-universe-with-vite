import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();

            setData(value.data.tools);
        }
        loadData();

    }, []);



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 md:px-10 lg:px-12'>
            {
                data.map(singleData => <SingleData
                singleData={singleData}
                key={singleData.id}
                ></SingleData>
                    
                )
            }
        </div>
    );
};

export default Card;