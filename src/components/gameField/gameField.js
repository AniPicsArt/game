import React, { useState, useEffect, useRef } from 'react';
import Snake from '../../assets/snake.png'
import useStyles from './useStyles';
import Modal from '../Modal'
import { useDispatch, useSelector } from "react-redux";
import { changeGameStatusToStop, changeDirection } from "../../redux/game/game-actions";

const GameField = () => {
    const classes = useStyles();
    const [endGame, setEndGame] = useState(false);
    const [snake, setSnake] = useState([{x:0,y:0},{x:1,y:0}]);
    const stopGame = useSelector(state => state.stopGame);
    const direction = useSelector(state => state.direction);
    const dispatch = useDispatch();
    const savedCallback = useRef();
    let intervalId = useRef(null);
    const width=10;
    const height=10;
    let initialRows = [];
    const [rows, setRows] = useState(initialRows);

        for(let i=0; i<height; i++) {
            initialRows.push([]);
            for(let k=0; k<width; k++) {
                initialRows[i].push('blank');
            }
        }

    const changeDirectionWithKeys = ({ keyCode }) => {
        switch(keyCode) {
            case 37:
                changeDirection('left');
                break;
            case 38:
                changeDirection('top');
                break;
            case 39:
                changeDirection('right');
                break;
            case 40:
                changeDirection('bottom');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", changeDirectionWithKeys);

        return () => document.removeEventListener("keydown", changeDirectionWithKeys);
    }, [])

    const displaySnake = () => {
        const newRows = initialRows;

        snake.forEach(cell => {
            newRows[cell.x][cell.y]='snake';
        })
        setRows(newRows);
    }


    const isOutOfBoard = (coord) => {
        return coord < 0 || coord > 10;
    }
    const moveSnake = () => {
        const newSnake = [];

        switch(direction) {
            case 'right':
                if (isOutOfBoard(snake[0].y + 1)) {

                    return setEndGame(true);
                }
                newSnake.push({x: snake[0].x, y: (snake[0].y + 1)})
                break;
            case 'left':
                if (isOutOfBoard(snake[0].y)) {

                    return setEndGame(true);
                }
                newSnake.push({x: snake[0].x, y: (snake[0].y - 1)})
                break;
            case 'top':
                if (isOutOfBoard(snake[0].x - 1)) {

                    return setEndGame(true);
                }
                newSnake.push({x: (snake[0].x - 1), y: snake[0].y})
                break;
            case 'bottom':
                if (isOutOfBoard(snake[0].x + 1)) {

                    return setEndGame(true);
                }
                newSnake.push({x: (snake[0].x + 1), y: snake[0].y})
            default:
                break;
        }
        setSnake(newSnake);
        displaySnake();
    }

        useEffect(() => {
            if(!stopGame){
                savedCallback.current = moveSnake
            }
        }, [moveSnake, stopGame])

        useEffect(() => {
            if(!stopGame){
                const x = () =>  savedCallback.current()
                intervalId.current = setInterval(x, 1000)
            }
            if(stopGame && intervalId.current){
                clearInterval(intervalId.current);
                intervalId.current = null;
            }

        }, [stopGame])

    const displayRows = rows.map(row =>
        <li>
            {row.map(e => e === 'blank'
                    ? (<img src={Snake} alt="img1"/>)
                    : (<img src={Snake} className={classes.imgStyles} alt="img2"/>)
            )}
        </li>
    );

    const text = stopGame? 'Continue' : 'Stop'

    const changeGameStatus = () => {
            stopGame ?
                dispatch(changeGameStatusToStop(false))
                : dispatch(changeGameStatusToStop(true));
        }

    return (
        <>
            { displayRows }
            <button onClick={changeGameStatus}>{text}</button>
            {
                endGame && (
                    <Modal />
                )
            }
        </>
    )
}

export default GameField;
