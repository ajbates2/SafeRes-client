const { default: config } = require("../config")
const { default: TokenService } = require("./token-service")

const SafeResAPIService = {
    getAllCurrentResi() {
        return fetch(`${config.API_ENDPOINT}/res/all`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postNewResi(guest_name, phone_number, party_size, res_time, walk_in, notes, res_date) {
        return fetch(`${config.API_ENDPOINT}/res`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                guest_name,
                phone_number,
                party_size,
                res_time,
                walk_in,
                notes,
                res_date
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateResInfo(res_id, guest_name, phone_number, party_size, res_time, notes) {
        return fetch(`${config.API_ENDPOINT}/res/${res_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                guest_name,
                phone_number,
                party_size,
                res_time,
                notes
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateGuestArrived(res_id) {
        return fetch(`${config.API_ENDPOINT}/res/arrived/${res_id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            method: 'PATCH'
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateGuestNoShow(res_id) {
        return fetch(`${config.API_ENDPOINT}/res/no_show/${res_id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            method: 'PATCH'
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateGuestCancelled(res_id) {
        return fetch(`${config.API_ENDPOINT}/res/cancel/${res_id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            method: 'PATCH'
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default SafeResAPIService