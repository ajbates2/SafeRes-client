import ReactDOM from 'react-dom';
import SmallResInfo from './SmallResInfo';

describe('SmallResInfo components render without crashing', () => {
    it('SmallResInfo renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SmallResInfo />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})