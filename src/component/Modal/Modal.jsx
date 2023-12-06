import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const { image_link, description, features, integrations } = props.singleData;

    // console.log(Object.values(features || {}))
    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100 ">
                        <div className="card-body border-2 border-error mr-2">
                            <h2 className="card-title">{description ? description : "Not Found"}</h2>

                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='text-xl font-bold'>Features</h2>
                                    {
                                        Object.values(features || {}).map((value, index) => <p>{index + 1}. {value.feature_name ? value.feature_name : "Not Found"}</p>)
                                    }

                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>Integrations</h2>
                                    {
                                        integrations?.map((int, index) => <p>{index + 1}. {int ? int : "Not Found"}</p>)
                                    }
                                </div>
                            </div>

                        </div>
                        <figure className='w-full rounded'>
                            <img className='w-full h-96' src={image_link ? image_link[0] : null} alt="Album" />
                        </figure>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;