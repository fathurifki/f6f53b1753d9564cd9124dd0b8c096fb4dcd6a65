import * as React from 'react';
import Header from '../header';
import Body from '../body';
import image from 'src/assets/image';
import Modal from '../modal';



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
        <div className="bg-gray-200">
            <div className="h-screen m-auto max-w-md bg-white">
                <div className="flex flex-col h-screen">
                    <div className="flex flex-col h-screen">
                        <Header />
                        <div className="w-full overflow-auto h-screen">
                            <Body />
                            {/* <Modal/> */}
                        </div>
                        <div className="flex flex-col">
                            <div className="relative flex rounded flex-row bottom-0 mb-4 justify-between ml-2 mr-2 p-4 max-w-md bg-red-500 text-white">
                                <div className="flex flex-col">
                                    <span className="font-bold">5 Items | Rp. 125.000</span>
                                    <span>Termasuk Ongkos Kirim</span>
                                </div>
                                <div className="flex flex-row">
                                    <img src={image.cart} height={30} width={30}></img>
                                    <img src={image.arrowWhite} height={30} width={30}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main