import * as React from 'react';
import image from 'src/assets/image';

const Modal = ({ modalClick, onChange, resultFilter, setDestiny, isMobile }: any) => {
    const renderComponent = resultFilter.map((val: any, i: any) => {
        return (
            <React.Fragment key={i}>
                <div onClick={() => setDestiny(val.address)} className="flex flex-row px-2 mx-4 rounded-lg m-2 cursor-pointer">
                    <div className="rounded-full h-8 w-10 justify-center items-center bg-gray-200 flex flex-col">
                        <img alt="iconPin" src={image.pinwhite} width={20} height={10}></img>
                    </div>
                    <div className="ml-4 w-full">
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
                <div className={`relative flex flex-col bg-white max-w-md w-full ${isMobile ? 'h-168' : 'h-192'} rounded-t-lg`}>
                    <div className="cursor-pointer flex flex-row justify-end p-4" onClick={modalClick}>
                        <img alt="iconClose" src={image.close} height={20} width={20}></img>
                    </div>
                    <span className={`ml-6 text-2xl ${isMobile ? "mr-10" : "mr-24"} font-medium`}>Cek makanan yang tersedia di lokasi kamu!</span>
                    <div className="flex flex-row p-2 mx-4 my-6 border-2 mg rounded-lg mx-6">
                        <img className="pr-2" alt="iconPin" src={image.pin} width={24} height={20}></img>
                        <input onChange={onChange} className="ml-2 w-full "></input>
                    </div>
                    <div className="mb-16">
                        {renderComponent}
                    </div>
                    <div className={`flex flex-row justify-center items-center bottom-0 ${isMobile ? null : "mt-10"}`}>
                        <img alt="iconGoogle" src="http://files.hostgator.co.in/hostgator254362/image/powered-by-google.png" height={200} width={120}></img>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-40 max-w-md m-auto bg-black opacity-25"></div>
        </React.Fragment>
    )
}

export default Modal