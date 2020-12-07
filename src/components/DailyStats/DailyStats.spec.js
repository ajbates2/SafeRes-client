import ReactDOM from 'react-dom';
import DailyCancelled from './DailyCancelled';
import DailyHeadCount from './DailyHeadCount';
import DailyNoShows from './DailyNoShow';
import DailyStats from './DailyStats';
import DailyUnique from './DailyUnique';
import DailyWalkIns from './DailyWalkIns';

describe('DailyStats components render without crashing', () => {
    it('DailyCancelled renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <DailyCancelled />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('DailyHeadCount renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <DailyHeadCount />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('DailyNoShows renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <DailyNoShows />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('DailyStats renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <DailyStats />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('DailyUnique renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <DailyUnique />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
    it('DailyWalkIns renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <DailyWalkIns />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})