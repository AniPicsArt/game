import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
container: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#ffffff',
},
time: {
    fontSize: '3rem',
    padding: '2rem',
},
button: {
    padding: '.6rem 1.5rem',
    margin: '.4rem',
    borderRadius: 3,
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '.8rem',
    borderStyle: 'groove',
'&:focus': {
             outlineWidth: 0,
         },
},
buttonPrimary:{
'&:hover': {
    backgroundColor: '#2641d4',
    border: '1px solid #1b1f2b',
},
},
buttonPrimaryActive: {
    backgroundColor: '#3151ff',
    border: '1px solid #152684',
    color: '#ffffff',
},
buttonPrimaryInactive: {
    backgroundColor: '#3151ff',
    border: '1px solid #152684',
    color: '#ffffff',
},
})

export default useStyles;

