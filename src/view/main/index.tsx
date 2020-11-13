import * as React from 'react';
import MainView from './components/MainView';
import { MainController } from './controller';

const Main = () => {
    return (
        <MainController>
            <MainView />
        </MainController>
    )
}

export default Main