import * as React from 'react';
import image from 'src/assets/image';

const Modal = ({ modalClick, onChange, resultFilter }: any) => {
    const renderComponent = resultFilter.map((val: any, i: any) => {
        return (
            <React.Fragment key={i}>
                <div className="flex flex-row p-2 mx-4 rounded-lg m-2">
                    <div className="flex flex-col justify-center items-center">
                        <img src={image.pin} width={20} height={20}></img>
                    </div>
                    <div className="ml-4">
                        <p>{val.address}</p>
                        <span>{val.subAddress}</span>
                        <hr className="mt-2" />
                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <React.Fragment>
            <div className="justify-center items-end flex absolute inset-0 z-50">
                <div className="flex flex-col bg-white max-w-md w-full max-h-1/2 rounded-t-lg ">
                    <div className="flex flex-row justify-end p-4" onClick={modalClick}>
                        <img src={image.close} height={30} width={30}></img>
                    </div>
                    <span className="m-4 text-3xl font-medium">Cek makanan yang tersedia di lokasi kamu!</span>
                    <div className="flex flex-row p-2 mx-4 border-2 rounded-lg m-4">
                        <img src={image.pin} width={20} height={20}></img>
                        <input onChange={onChange} className="ml-2 w-full"></input>
                    </div>
                    <div className="mb-10">
                        {renderComponent}
                    </div>
                    <div className="flex flex-row justify-center m-8">
                        <img src="http://files.hostgator.co.in/hostgator254362/image/powered-by-google.png" height={200} width={120}></img>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-40 bg-black opacity-25"></div>
        </React.Fragment>
    )
}

export default Modal