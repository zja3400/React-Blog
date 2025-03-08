import React from 'react';
import { MainContainer } from '../../assets/style/layout/mainStyle'

import AppRoutes from './../../routes'

const Container = () => {
    return (
        <MainContainer className="App-container">
            <AppRoutes />
        </MainContainer>
    );
}
export default Container;
