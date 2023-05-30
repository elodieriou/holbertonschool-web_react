import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { user, logOut, AppContext} from "../App/AppContext";


describe('Header component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <AppContext.Provider value={{ user, logOut }}>
                <Header />
            </AppContext.Provider>
        );
        console.log(wrapper.html());
    });

    it('renders Header without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it.skip('renders a div with the class App-header', () => {
        const appHeader = wrapper.find('[className^="header"]');
        expect(appHeader).toHaveLength(1);
    });

    it.skip('renders a tag img', () => {
        const appHeader = wrapper.find('img');
        expect(appHeader).toHaveLength(1);
    });

    it.skip('renders a tag h1', () => {
        const appHeader = wrapper.find('h1');
        expect(appHeader).toHaveLength(1);
    });
});
