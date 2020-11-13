import * as React from 'react';
import image from '../../assets/image';
import DatePickers from 'src/components/datePicker';

const Header = ({ onClickModal, selectedDay, addressDestination, isMobile }: any) => {
    console.log('is mobile', isMobile)
    return (
        <React.Fragment>
            <div className={`flex flex-row ${isMobile ? "py-2 px-2" : "py-4 px-4"}`}>
                <div className="flex flex-col justify-center items-center ">
                    <img src={image.back} width={30} height={30} />
                </div>
                <div className="flex flex-col pl-2">
                    <p className="font-sans text-xs">ALAMAT PENGANTARAN</p>
                    <div className="flex flex-row" onClick={onClickModal}>
                        <p className="font-sans text-xl font-bold tracking-wide">{addressDestination || `Pilih Destinasi`}</p>
                        <img className="pl-1 cursor-pointer" src={image.down} width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className="px-4">
                <DatePickers selectDate={selectedDay} />
            </div>
        </React.Fragment>
    )
}

export default Header