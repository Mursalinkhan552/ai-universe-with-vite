import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);



    const handleShowAll = () => {
        setShowAll(true);
    }

    const handleSort = () => {
        const sortedData = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        });
        setData([...data,sortedData])
    }


    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();

            setData(value.data.tools);
        }
        loadData();

    }, []);

    useEffect(() => {
        fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId]);


    return (
        <>
            <span onClick={handleSort}>
                <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 md:px-10 lg:px-12'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData
                        singleData={singleData}
                        key={singleData.id}
                        setUniqueId={setUniqueId}
                    ></SingleData>

                    )
                }
            </div>
            {
                !showAll && <span onClick={handleShowAll}>
                    <Button>See More</Button>
                </span>
            }
            <Modal
                singleData={singleData}

            />
        </>
    );
};

export default Card;