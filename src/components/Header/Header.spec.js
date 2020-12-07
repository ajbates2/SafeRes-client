import ReactDOM from 'react-dom';
import Header from './Header';
import HeaderMenu from './HeaderMenu';

describe('Header components render without crashing', () => {
    it('Header renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Header />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('HeaderMenu renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <HeaderMenu />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})