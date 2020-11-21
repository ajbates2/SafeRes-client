import React, { useState } from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import './LoginPage.css'

export default function LoginPage(props) {

    const [error, setErrorState] = useState({ error: null })

    const handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        setErrorState({ error: null })
        const { email, password } = ev.target

        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                props.history.push('/reservations')
            })
            .catch(res => {
                setErrorState({ error: res.error })
            })
    }

    return (
        <div className='login_page'>
            <header className='login_header'>
                <h1>SafeRes</h1>
            </header>
            <main>
                <form
                    className='login_form'
                    onSubmit={handleSubmitJwtAuth}
                >
                    <h2>Login</h2>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' type='text' />
                    <label htmlFor='password'>password</label>
                    <input id='password' name='password' type='password' />
                    <button type='submit'>Login</button>
                    <div role='alert'>
                        {error.error && <p className='red'>{error.error}</p>}
                    </div>
                </form>
                <div className='demo_creds'>
                    Demo account Creds
                </div>
            </main>
            <footer>
                <div>
                    contact
                </div>
            </footer>
        </div>
    )
}