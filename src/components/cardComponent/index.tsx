import * as React from 'react';
import RenderRating from '../ratings';
import formatPrice from 'src/utils/middleware';

const CardComponent = ({ image, name, price, buttonCart, key, isMobile, iconPlus, rating }: any) => {
    console.log('RATING', rating)
    return (
        <React.Fragment key={key}>
            <div className="border border-custom-custom6 shadow-md rounded-lg hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden">
                <img alt="imageProp" src={image} className={`${isMobile ? "h-40" : "h-48"} w-full object-cover object-center`}></img>
                <div className="w-full flex flex-col p-3 bg-white h-full">
                    <div className="flex flex-row items-center ">
                        <span className="text-l font-bold mt-1 mr-2 text-custom-custom4 ">{rating}</span>
                        <RenderRating value={rating}  />
                    </div>
                    <h3 className="font-semibold tracking-tighter text-gray-700 w-full text-left mt-1 text-xl">{name}</h3>
                    <p className="pt-0 cursor-default text-custom-custom4 font-medium">by Kulina &middot; Uptown Lunch </p>
                    <div className="flex flex-row items-center w-full mt-2">
                        <div className="flex flex-col justify-start w-1/2 text-custom-custom3 font-bold text-xl">
                            <span>{formatPrice(price)}</span>
                        </div>
                        <div className="flex flex-col justify-end w-1/2" />
                        <div className={`flex flex-col justify-end ${isMobile ? "w-1/2" : "w-1/3"}`}>
                            <button onClick={() => buttonCart({ items: name, price: price })} className="font-semibold flex flex-row items-center justify-center bg-custom-custom1 text-white px-1 py-2 focus:outline-none rounded">
                                ADD
                                <img alt="iconPlus" className="ml-1 font-semi-bold" src={iconPlus} width={20} height={20} ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardComponent