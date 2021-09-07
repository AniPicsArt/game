import React, { useCallback, useState } from "react"
import useStyles from "./useStyles"

const Modal = () => {
    const classes = useStyles();
    const [visible, setVisible] = useState(true);

    const handleReload = () => {
        return window.location.reload();
    }

    return (
        <>
            { visible && (
                <div className={ classes.modalContent }>
                    <div className={ classes.gameOver }>Ooops!</div>
                    <button onClick={ () => setVisible(false) }>Close</button>
                    <button className={ classes.tryButton } onClick={ handleReload }>Try Again</button>
                </div>
            ) }
        </>
    )
}

export default Modal;
