import { FaGithub } from "react-icons/fa";
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
                <div className='photo_container'>
                    <form
                        className='login_form'
                        onSubmit={handleSubmitJwtAuth}
                    >
                        <h2>Login</h2>
                        <input id='email' placeholder='email' name='email' type='text' required />
                        <input id='password' placeholder='password' name='password' type='password' required />
                        <input type='submit' value='log in' className='cursor_hover' />
                        <div role='alert'>
                            {error.error && <p className='red'>{error.error}</p>}
                        </div>
                    </form>
                </div>
                <div className='demo_creds rich_black_font'>
                    <h3>Demo account Creds</h3>
                    <p>
                        email: foo@bar.com<br />
                        password: password
                    </p>
                    <p className='demo_info'>
                        ***Text messaging is active, but I am paying for it out of pocket. It's not that expensive, but please don't go crazy.***
                    </p>
                </div>
            </main>
            <footer className="independence">
                <h3>About</h3>
                <p>
                    SafeRes is an app designed to help restaurants manage there daily reservations, as well
                    as help with contact tracing during the COVID-19 pandemic.
                </p>
                <p>
                    Being able to contact your guests in the event you find out somebody was in your restaurant
                    that tested positive for COVID-19 will help slow the spread of this disease.
                </p>
                <p>
                    Since you have to set up text messaging for every account, and the fact that this app uses
                    sensitive data, account creation is not active at this time.
                </p>
                <div className="repo_icons">
                    <a href='https://github.com/ajbates2/'
                        className='gitHub_link'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <FaGithub
                            className='gitHub_alt'
                        />
                    </a>
                </div>
            </footer>
        </div>
    )
}