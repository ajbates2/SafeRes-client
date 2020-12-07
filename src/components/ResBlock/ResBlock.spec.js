import ReactDOM from 'react-dom';
import ResBlock from './ResBlock';

describe('ResBlock components render without crashing', () => {
    it('Resblock renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ResBlock />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})