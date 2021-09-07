import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    modalContent: {
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: 32,
        position: 'absolute',
        maxWidth: 776,
        transform: 'translate(-50%, -50%)',
        maxHeight: 200,
        borderRadius: 16,
        flexDirection: 'column',
        pointerEvents: 'auto',
        opacity: '0.9',
        backgroundColor: '#8FBC8F',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gameOver: {
        fontSize: 70,
        color: '#1c100b',
        backgroundColor: 'none',
    },
    tryButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default useStyles;
