import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import Button from "../Button/Button";

export default function LoginPage(){
    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch()
    const history = useHistory();

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const loginHandler = async (e) => {
        e.preventDefault()
        const validUserData = {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
        }

        if ( JSON.stringify(validUserData) === JSON.stringify(form) ){
            sessionStorage.setItem('isAuth', 'true')
            dispatch({type: 'LOG_IN'})
            history.push('/')
        } else {
            setError("Invalid user data")
        }
    };

    return(
        <section>
            <h2>Sign in to your account</h2>
            <form>
                <div>
                    <div>
                        <input id='email' type="text" name="username" onChange={changeHandler}/>
                        <input id='password' type="password" name="password" onChange={changeHandler}/>
                    </div>
                </div>

                {/*<button onClick={loginHandler}>Log in</button>*/}
                <Button text={'Log in'} type={'login'} onClick={loginHandler}/>
                {error && <h2 style={{color: 'red'}}>{error}</h2>}
            </form>
        </section>
    )
}