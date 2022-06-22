import React from 'react';
import renderer from "react-test-renderer";
import {XTic, OTic} from '../../app/components';
import {HomeScreen} from '../../app/screens'

describe('Testing components rendering', () => {

    test('HomeScreen renders correctly', () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    test('XTic renders correctly', () => {
        const tree = renderer.create(<XTic />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OTic button renders correctly', () => {
        const tree = renderer.create(<OTic />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})