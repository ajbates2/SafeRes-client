import ReactDOM from 'react-dom';
import ResToast from './ResToast';

describe('ResToast components render without crashing', () => {
    it('Resblock renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ResToast />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})