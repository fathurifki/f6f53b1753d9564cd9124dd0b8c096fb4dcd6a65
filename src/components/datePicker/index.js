import React from 'react';
import DatePicker from './DatePicker';


const DatePickers = ({ selectDate }) => {
    return (
        <React.Fragment>
            <DatePicker
                endDate={14}
                getSelectedDay={selectDate}
                labelFormat={"MMMM"}
                color={"#374e8c"}
            />
        </React.Fragment>
    )
}

export default DatePickers