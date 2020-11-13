import * as React from 'react';
import Header from '../../header';
import Body from '../../body';
import image from 'src/assets/image';
import Modal from '../../modal';
import Footer from '../../footer';
import { MainContext } from '../controller';



const MainView = () => {
    const controller = React.useContext(MainContext)
    const {
        setModal,
        modal,
        setButton,
        buttonRight,
        buttonLeft,
        modalCart,
        filterFood,
        resultFood,
        pushToCart,
        items,
        price,
        setLocation,
        resultAddress,
    } = controller

    const renderResultFood = resultFood.map((val: any) => val)
    const countItems = items.length
    const countPrice = price.map((val: any) => val).reduce((a: any, b: any) => a + b, 0)

    const address = [
        {
            "id": 1,
            "address": "Kulina",
            "subAddress": "Jalan Tulodong Atas 28, Senayan, Kebayoran"
        },
        {
            "id": 2,
            "address": "Kaliurang",
            "subAddress": "Jalan Kaliurang Atas"
        },
        {
            "id": 3,
            "address": "Gondomanan",
            "subAddress": "Jalan Gondomanan"
        },
        {
            "id": 4,
            "address": "Sayagan",
            "subAddress": "Jalan Sayegan"
        },
        {
            "id": 5,
            "address": "Kauman",
            "subAddress": "Jalan Haji Sarmili"
        }
    ]

    const resultFilterAddress = !resultAddress.length ? address : resultAddress


    return (
        <div className="bg-gray-200">
            <div className="h-screen m-auto max-w-md bg-white">
                <div className="flex flex-col h-screen">
                    <div className="flex flex-col h-screen">
                        <Header
                            onClickModal={() => setModal()}
                            selectedDay={(e: any) => filterFood(e)}
                        />
                        <div className="w-full overflow-auto h-screen">
                            <Body
                                buttonSwitch={() => setButton()}
                                buttonLeft={buttonLeft}
                                buttonRight={buttonRight}
                                buttonCart={(e: any) => pushToCart(e)}
                                resultFood={renderResultFood}
                            />
                            {
                                modal &&
                                <Modal
                                    modalClick={() => setModal()}
                                    onChange={(e: any) => setLocation(e)}
                                    resultFilter={resultFilterAddress}
                                />
                            }
                        </div>
                        <div className="flex flex-col">
                            {
                                modalCart && <Footer items={countItems} price={countPrice} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainView