import * as React from 'react';
import image from '../../assets/image';
import DatePickers from 'src/components/datePicker';

const Header = ({ buttonSwitch, buttonLeft, buttonRight, onClickModal, selectedDay, addressDestination, isMobile }: any) => {
    console.log('is mobile', isMobile)
    return (
        <React.Fragment>
            <div className={`flex flex-row ${isMobile ? "py-2 px-2" : "py-4 px-4"}`}>
                <div className="flex flex-col justify-center items-center ">
                    <img alt="iconBack" src={image.back} width={30} height={30} />
                </div>
                <div className="flex flex-col pl-2">
                    <p className="font-sans text-xs tracking-tight">ALAMAT PENGANTARAN</p>
                    <div className="flex flex-row" onClick={onClickModal}>
                        <p className="font-sans  text-custom-custom3 text-xl font-bold tracking-tight">{addressDestination || `Pilih Destinasi`}</p>
                        <img alt="iconDown" className="pl-1 cursor-pointer" src={image.down} width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className={`${isMobile ? "px-6" : "px-4"}`}>
                <DatePickers selectDate={selectedDay} />
            </div>
            <hr className="w-full" />
            <div className="flex flex-row border-2 rounded-md border-custom-custom6 justify-around my-4 mx-4">
                <div onClick={buttonSwitch} className={`font-sans font-bold tracking-wide rounded-l-md flex flex-col justify-center items-center ${buttonLeft ? "bg-custom-custom3" : "bg-white"} ${!buttonLeft ? "text-custom-custom4" : "text-white"} w-1/2 h-full p-2`}>
                    Lunch
                </div>
                <div onClick={buttonSwitch} className={`font-sans font-bold tracking-wide rounded-r-md flex flex-col justify-center items-center ${buttonRight ? "bg-custom-custom3" : "bg-white"} ${!buttonRight ? "text-custom-custom4" : "text-white"}  w-1/2 p-2`}>
                    Dinner
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header