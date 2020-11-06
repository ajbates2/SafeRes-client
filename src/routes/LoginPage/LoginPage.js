import React from "react";
import { Link } from "react-router-dom";
import './LoginPage.css'

export default function LoginPage() {

    return (
        <div className='login_page'>
            <header className='login_header'>
                <h1>SafeRes</h1>
            </header>
            <main>
                <form className='login_form'>
                    <h2>Login</h2>
                    <label htmlFor='username'>UserName</label>
                    <input id='username' name='password' type='text' />
                    <label htmlFor='password'>password</label>
                    <input id='password' name='password' type='password' />
                    <button><Link to='/reservations'>Submit</Link></button>
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