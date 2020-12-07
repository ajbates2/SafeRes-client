import ReactDOM from 'react-dom';
import EditRes from './EditRes';
import EditResButtons from './EditResButtons';
import EditResForm from './EditResForm';

describe('EditRes components render without crashing', () => {
    it('EditRes renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <EditRes />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('EditResButtons renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <EditResButtons />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('EditResForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <EditResForm />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})