import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react'
import EditRes from '../EditRes/EditRes'
import './Reservation.css'

export default class Reservation extends Component {
    static defaultProps = {
        name: '',
        id: 0,
        partySize: 0,
        notes: '',
        phoneNumber: 0,
    }

    state = {
        selected: false
    }


    onClick = () => {
        this.setState(prev => ({
            selected: !prev.selected
        }))
    }

    onSubmit = ev => {
        ev.preventDefault()
        this.setState(prev => ({
            selected: !prev.selected
        }))
    }

    render() {
        if (!this.state.selected) {
            return (
                <li className="res_block" key={this.props.id}>
                    <span className='res_name'>{this.props.name}</span>
                    <span className='res_party'>{this.props.partySize} ppl</span>
                    <span className='res_notes'>{this.props.notes}</span>
                    <span className='fa_icons'>
                        <FontAwesomeIcon
                            icon='edit'
                            className='fa_edit'
                            onClick={() => this.onClick()}
                        />
                        <FontAwesomeIcon icon='bell' className='fa_bell' />
                        <FontAwesomeIcon icon='check-square' className='fa_check_box' />
                    </span>
                </li>
            )
        }
        else {
            return (
                <EditRes
                    onSubmit={this.onSubmit}
                    {...this.props}
                />
            )
        }
    }
}
