import * as React from 'react';
import image from 'src/assets/image';

const Footer = ({ items, price }: any) => {
    return (
        <React.Fragment>
            <div className="relative flex rounded flex-row bottom-0 mb-4 justify-between ml-2 mr-2 p-4 max-w-md bg-red-500 text-white">
                <div className="flex flex-col">
                    <span className="font-bold">{items} Items | Rp. {price}</span>
                    <span>Termasuk Ongkos Kirim</span>
                </div>
                <div className="flex flex-row">
                    <img src={image.cart} height={30} width={30}></img>
                    <img src={image.arrowWhite} height={30} width={30}></img>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer