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
        const newRes = { guest_name, phone_number, party_size, res_time, walk_in, notes, res_date }
        return fetch(`${config.API_ENDPOINT}/res`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                newRes
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
    }
}

export default SafeResAPIService