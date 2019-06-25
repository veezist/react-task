import React from 'react';
import {shallow} from 'enzyme';
import {MainPage} from '../MainPage/MainPage';





describe('<MainPage />',() => {
    it('renders main page', () => {
       const mainPage= shallow(<MainPage/>);
        expect(mainPage).toMatchSnapshot();
    });
});
