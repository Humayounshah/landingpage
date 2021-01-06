import React, { useEffect ,useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar,Collapse,IconButton,Toolbar} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles ((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        fontFamily:'Nunito',
    },
    appbar:{
        background:'none',
        fontFamily:'Nunito',
    },
    icon:{
        color: '#fff',
        fontSize:'3rem'
    },
    appbarTitle: {
        flexGrow:'1',
    },
    appbarWrapper:{
        width: '80%',
        margin:'0 auto'
    },
    colorText:{
        color:'#5AFF3D',
    },
    title:{
        color:'#fff',
        fontSize:'4.5rem'
    },
    container:{
        textAlign:'center'
    },
    goDown:{
        color:'#5AFF3D',
        fontSize:'4.5rem',
    }
}));

const Header = () => {
    const classes = useStyles();

    const [checked,setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[]);

    return(
        <>
            <div className={classes.root}>
                <AppBar className={classes.appbar}
                    elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My
                    <span className={classes.colorText}>Island.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                    </Toolbar>
                </AppBar>
                <Collapse in={checked}
                 {...( checked ?{timeout:1000} : {})}
                collapsedHeight={15}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcome to <br/>
                     <span className={classes.colorText}>My Island</span>
                     </h1>
                     <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>
                </div>
                </Collapse>
            </div>
        </>
    )
};

export default Header;
