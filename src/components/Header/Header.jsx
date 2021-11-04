import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useCallback, useState} from "react";
import Button from "../Button/Button";

export default function Header({isAuth}) {
    const dispatch = useDispatch()
    const history = useHistory();

    const logOutHandler = (e) => {
        console.log('logOutHandler clicked')
        dispatch({type: 'LOG_OUT'})
        history.push('/login')
        sessionStorage.removeItem('isAuth')
        window.location.reload();
    }

    return (
        <div style={{
            padding: '20px',
            height: '100px',
            width: '100%',
            backgroundColor: '#ABCDAB',
            position: 'relative',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            alignItems: 'center'
        }}>
            <h1 style={{
                padding: 0,
                margin: 0,
            }}>Bridge</h1>
            {isAuth && <Button text={'SignOut'} type={'logout'} onClick={logOutHandler}/>}
        </div>
    )
}