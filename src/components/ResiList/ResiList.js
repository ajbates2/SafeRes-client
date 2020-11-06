import { Component } from "react";
import Reservation from "../Reservation/Reservation";

export default class ResiList extends Component {
    static defaultProps = {
        resi: [],
        time: ''
    }

    state = {
        selected: false
    }

    render() {
        return (
            <>
                {this.props.resi.map(res => {
                    if (res.time === this.props.time) {
                        return (
                            <Reservation
                                key={res.id}
                                {...res}
                            />
                        )
                    }
                    else return null
                }
                )}
            </>
        )
    }
}