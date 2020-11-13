import * as React from 'react';
import Header from '../../header';
import Body from '../../body';
import Modal from '../../modal';
import Footer from '../../footer';
import { MainContext } from '../controller';
import { address } from 'src/utils/dummyData';
import { isMobile } from 'src/utils/middleware';



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
        setDate,
        resultAddress,
        setDestiny,
        addressDestination
    } = controller

    const renderResultFood = resultFood.map((val: any) => val)
    const countItems = items.length
    const countPrice = price.map((val: any) => val).reduce((a: any, b: any) => a + b, 0)
    const resultFilterAddress = !resultAddress.length ? address : resultAddress
    const Mobile = isMobile()

    return (
        <div className="bg-gray-200">
            <div className="h-screen m-auto max-w-md bg-white">
                <div className="flex flex-col h-screen">
                    <div className="flex flex-col h-screen">
                        <Header
                            onClickModal={() => setModal()}
                            selectedDay={(e: any) => filterFood(e)}
                            addressDestination={addressDestination}
                            isMobile={Mobile}
                        />
                        <div className="w-full overflow-auto h-screen">
                            <Body
                                buttonSwitch={() => setButton()}
                                buttonLeft={buttonLeft}
                                buttonRight={buttonRight}
                                buttonCart={(e: any) => pushToCart(e)}
                                resultFood={renderResultFood}
                                setDate={setDate}
                            />
                            {
                                modal &&
                                <Modal
                                    modalClick={() => setModal()}
                                    onChange={(e: any) => setLocation(e)}
                                    resultFilter={resultFilterAddress}
                                    setDestiny={(e: any) => setDestiny(e)}
                                    
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