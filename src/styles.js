import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  startContainer: {
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
  btn: {
    width: 100,
    height: 50,
  },
  App: {
    textAlign: 'center',
  },
  AppLogo: {
    height: '40vmin',
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#ffffff',
  },
  AppLink: {
    color: '#09d3ac',
  }
})

export default useStyles;

