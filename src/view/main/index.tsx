import * as React from 'react';
import Header from '../header';
import Body from '../body';



const Main = () => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const dateToday = dd + '/' + mm + '/' + yyyy;

    const [state, setState] = React.useState({
        current: dateToday
    })

    console.log('TODAY', state)

    return (
        <div className="h-screen m-auto max-w-md bg-gray-200">
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen">
                    <Header />
                    <div className="w-full overflow-auto h-screen">
                    <Body />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main