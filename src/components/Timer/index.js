import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeGameState } from "../../redux/game/game-actions";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const dispatch = useDispatch();
    const stopGame = useSelector(state => state.stopGame);

    function toggle() {
        setIsActive(!isActive);
        stopGame ?
                    dispatch(changeGameState(false))
                    : dispatch(changeGameState(true));
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);

    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {seconds}s
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
