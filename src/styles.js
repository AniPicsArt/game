import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
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

