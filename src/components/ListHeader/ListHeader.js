import jwt from 'jsonwebtoken'
import TokenService from '../../services/token-service'
import './ListHeader.css'
import moment from 'moment'

export default function ListHeader() {
    const decodeAuth = jwt.verify(TokenService.getAuthToken(), "its-corona-time")

    return (
        <div className='listHeader_container light_periwinkle_font'>
            <p>{decodeAuth.restaurant_name}</p>
            <p>{moment().format('MMM/DD/yyyy')}</p>
        </div>
    )
}