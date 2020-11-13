import * as React from 'react';
import RenderRating from 'src/components/ratings';



const Body = ({ buttonSwitch, buttonLeft, buttonRight, buttonCart, resultFood }: any) => {

    const renderComponent = resultFood.map((val: any, i: any) => {
        return (
            <React.Fragment key={i}>
                <div className="bg-white shadow rounded-lg hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden">
                    <img alt="imageProp" src="https://picsum.photos/200/300" className="h-48 w-full object-cover object-center"></img>
                    <div className="w-full flex flex-col p-4">
                        <div className="flex flex-row items-center ">
                            <span className="text-xl font-bold mt-1 mr-4">3.4</span>
                            <RenderRating />
                        </div>
                        <h3 className="font-bold text-gray-700 w-full text-left mt-1 text-2xl">{val.name}</h3>
                        <p className="pt-1 cursor-default font-bold">by Kulina Uptown Lunch </p>
                        <div className="flex flex-row items-center w-full mt-4">
                            <div className="flex flex-col justify-start w-1/2 text-black font-bold text-xl">
                                <span>Rp {val.price}</span>
                            </div>
                            <div className="flex flex-col justify-end w-1/2" />
                            <div className="flex flex-col justify-end w-1/2">
                                <button onClick={() => buttonCart({ items: val.name, price: val.price })} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 focus:outline-none rounded">Look</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    })
    return (
        <React.Fragment>
            <div className="flex flex-row justify-around m-4 shadow-md ">
                <div onClick={buttonSwitch} className={`rounded-l-md flex flex-col justify-center items-center ${buttonLeft ? "bg-black" : "bg-white"} text-white w-1/2 h-full p-4`}>
                    Lunch
                </div>
                <div onClick={buttonSwitch} className={`rounded-r-md flex flex-col justify-center items-center text-gray-200 ${buttonRight ? "bg-black" : "bg-white"}  w-1/2 p-4`}>
                    Dinner
                </div>
            </div>
            <div className="flex flex-wrap flex-col p-4 space-y-8">
                {renderComponent}
            </div>
        </React.Fragment>
    )
}

export default Body