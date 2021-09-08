import React, { useState, useEffect, useRef } from 'react';
import Snake from '../../assets/snake.png'
import useStyles from './useStyles';
import Modal from '../Modal'

const GameField = () => {
    const classes = useStyles();
    const [endGame, setEndGame] = useState(false);
    const [snake, setSnake] = useState([{x:0,y:0},{x:1,y:0}]);
    const [direction, setDirection] = useState('right');
    const [stopGame, setStopGame] = useState(false);
    const savedCallback = useRef();
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
                setDirection('left');
                break;
            case 38:
                setDirection('top');
                break;
            case 39:
                setDirection('right');
                break;
            case 40:
                setDirection('bottom');
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
        }, [moveSnake])

        useEffect(() => {
            let id;
            if(!stopGame){
                const x = () =>  savedCallback.current()
                id = setInterval(x, 600)
            }

            if(stopGame){
                clearInterval(id);
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
            stopGame ? setStopGame(false): setStopGame(true)
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
