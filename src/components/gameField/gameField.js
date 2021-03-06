import React, { useState, useEffect, useRef } from 'react';
import Snake from '../../assets/snake.png'
import useStyles from './useStyles';
import Modal from '../Modal'
import { useDispatch, useSelector } from "react-redux";
import Timer from "../Timer";
import { FinishGame, SnakePosition, Direction } from "../../redux/game/game-actions";

const GameField = () => {
    const classes = useStyles();
    const { stopGame, endGame, snake, direction } = useSelector(state => state);
    const savedCallback = useRef();
    let intervalId = useRef(null);
    const width=10;
    const height=10;
    let initialRows = [];
    const [rows, setRows] = useState(initialRows);
    const dispatch = useDispatch();

        for(let i=0; i<height; i++) {
            initialRows.push([]);
            for(let k=0; k<width; k++) {
                initialRows[i].push('blank');
            }
        }

    const changeDirectionWithKeys = ({ keyCode }) => {
        switch(keyCode) {
            case 37:
                dispatch(Direction('left'));
                break;
            case 38:
                dispatch(Direction('top'));
                break;
            case 39:
                dispatch(Direction('right'));
                break;
            case 40:
                dispatch(Direction('bottom'));
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

                    dispatch(FinishGame(true));

                    return;
                }
                newSnake.push({x: snake[0].x, y: (snake[0].y + 1)})
                break;
            case 'left':
                if (isOutOfBoard(snake[0].y)) {

                    dispatch(FinishGame(true));

                    return
                }
                newSnake.push({x: snake[0].x, y: (snake[0].y - 1)})
                break;
            case 'top':
                if (isOutOfBoard(snake[0].x - 1)) {

                    dispatch(FinishGame(true));

                    return
                }
                newSnake.push({x: (snake[0].x - 1), y: snake[0].y})
                break;
            case 'bottom':
                if (isOutOfBoard(snake[0].x + 1)) {

                    dispatch(FinishGame(true));

                    return
                }
                newSnake.push({x: (snake[0].x + 1), y: snake[0].y})
            default:
                break;
        }
        dispatch(SnakePosition(newSnake));
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
                intervalId.current = setInterval(x, 700)
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

    return (
        <>
            { displayRows }
            {
                endGame && (
                    <Modal />
                )
            }
            <Timer />
        </>
    )
}

export default GameField;
