import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from "./BodySection";
import {expectedError} from "@babel/core/lib/errors/rewrite-stack-trace";
import {StyleSheetTestUtils} from "aphrodite";

describe('BodySectionWithMarginBottom component tests', () => {

    let wrapper;
    const props = {
        title: "test title",
        children: React.createElement('p', 'test children node'),
    }

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = shallow(<BodySection { ...props }/>);
    });

    it('renders the BodySection component with the props', () => {
        expect(wrapper.containsAllMatchingElements([
            <div className="BodySectionWithMargin">
                <BodySection { ... props }/>
            </div>
        ]));
    });
});
