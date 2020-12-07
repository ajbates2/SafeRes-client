import ReactDOM from 'react-dom';
import TimeBlock from './TimeBlock';

describe('TimeBlock components render without crashing', () => {
    it('TimeBlock renders without crashing', () => {
        const resi = [
            {
                id: 2,
                guest_name: "Jeb",
                phone_number: "612-789-7890",
                party_size: 2,
                res_time: "16:00:00",
                notes: "bar",
                guest_info: {
                    id: 2,
                    visited: 0,
                    no_shows: 0,
                    cancellations: 0,
                    last_visit: null
                },
                waiting: false,
                notified: false
            }
        ]
        const div = document.createElement('div');
        ReactDOM.render(
            <TimeBlock resi={resi} />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
})