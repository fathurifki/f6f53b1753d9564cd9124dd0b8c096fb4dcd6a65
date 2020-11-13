import * as React from 'react';
import image from 'src/assets/image';

const Footer = ({ items, price }: any) => {
    return (
        <React.Fragment>
            <div className="relative flex rounded flex-row bottom-0 mb-4 justify-between ml-2 mr-2 p-2 max-w-md bg-custom-custom1 text-white">
                <div className="flex flex-col ml-2">
                    <span className="font-bold text-lg tracking-normal">{items} Items | Rp. {price}</span>
                    <span className="tracking-tight">Termasuk ongkos kirim</span>
                </div>
                <div className="flex flex-row">
                    <img alt="iconCart" src={image.cart} height={30} width={30}></img>
                    <img alt="iconArrow" src={image.arrowWhite} height={30} width={30}></img>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer