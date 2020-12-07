import React from 'react';
import ReactDOM from 'react-dom';
import AddResButton from './AddResButton';
import AddResForm from './AddResForm';

describe('Add Res components render without crashing', () => {
    it('AddResButton renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <AddResButton />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('AddResForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <AddResForm />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})