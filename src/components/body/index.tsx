import * as React from 'react';
import image from 'src/assets/image';
import CardComponent from 'src/components/cardComponent';



const Body = ({ buttonCart, resultFood, setDate, isMobile }: any) => {


    const renderComponent = resultFood.map((val: any, i: any) => {
        return (
            <React.Fragment key={i}>
                <CardComponent
                    image={val.image}
                    name={val.name}
                    price={val.price}
                    buttonCart={buttonCart}
                    key={i}
                    isMobile={isMobile}
                    iconPlus={image.plus}
                    rating={val.rating}
                />
            </React.Fragment>
        )
    })
    return (
        <React.Fragment>
            <div className={`font-semibold ${isMobile ? "text-md" : "text-lg"} pl-6`}>
                <p className="text-custom-custom3">{setDate}</p>
            </div>
            <div className="flex flex-wrap flex-col p-6 space-y-8">
                {renderComponent}
            </div>
        </React.Fragment>
    )
}

export default Body