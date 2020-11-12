import * as React from 'react';
import image from '../../assets/image';
import DatePickers from 'src/components/datePicker';

const Header = () => {
    const selectedDay = (val: any) => {
        console.log(val)
    };
    return (
        <React.Fragment>
            <div className="flex flex-row py-4 px-4">
                <div className="flex flex-col justify-center items-center p-2">
                    <img src={image.back} width={30} height={30} />
                </div>
                <div className="flex flex-col">
                    <p className="font-sans text-xs">ALAMAT PENGANTARAN</p>
                    <p className="font-sans text-xl font-bold">Tokopedia Tower</p>
                </div>
            </div>
            <div className="px-4">
                <DatePickers selectDate={selectedDay} />
            </div>
        </React.Fragment>
    )
}

export default Header