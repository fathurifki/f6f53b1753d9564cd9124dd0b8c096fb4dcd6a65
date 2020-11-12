import React from 'react';
import Ratings from 'react-ratings-declarative';

const RenderRating = () => {
    return (
        <React.Fragment>
            <Ratings
                rating={3.403}
                widgetDimensions="16px"
                widgetSpacings="4px"
            >
                <Ratings.Widget widgetRatedColor="red" />
                <Ratings.Widget widgetRatedColor="red" />
                <Ratings.Widget widgetRatedColor="red" />
                <Ratings.Widget widgetRatedColor="red" />
                <Ratings.Widget widgetRatedColor="red" />

            </Ratings>
        </React.Fragment>
    )
}

export default RenderRating