import { makeStyles } from '@mui/styles';

export const UseStyles = makeStyles({

    AppBar: {
        backgroundColor: 'transparent!important',
        boxShadow: 'none!important',
        zIndex: '1',
    },
    title: {

        color: '#fff'   
    },
    navButton: {
        color: '#fff!important',
        '&:hover': {
            backgroundColor: '#6c64644f',

        },
        '&:active': {
            backgroundColor: '#6c64644f',

        }
    },
    ProductButton: {
        border: '2px solid #c3bcbc!important',
        color: '#fff!important',
        // marginTop: '2rem',
        float: 'right',
        marginRight: '2rem!important',

    },

    navMenus: {
        margin: 'auto',
    },
    cardContainer: {
        
        // marginTop:'100px',
        margin:'100px 100px',
         
        position: 'relative',  
        height: '200px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
  
    },
    
    card: {
        width:'300px',

        backgroundColor: '#fff', 
        padding: '20px',
        borderRadius: '10px',
        margin: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add subtle shadow
        overflowX:'hidden',
    },
    productPrice:{
      fontWeight:'bold',  
    },
      
    cartButton:{
        border:"none!important",
        outline:'none',
        paddingLeft:'0px',
        cursor:'pointer',
        fontSize:'1.2rem',
    },

    cardActions:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },



    
    
   

    img: {
       
        width: '200px',
        height:'150px',
        objectFit: 'contain',
        margin:'auto',
        
    },

    cardDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },

    icons: {
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        '&:hover': {
            color: 'grey',
        },
    },


    ProductHeading: {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'default',

    },
    // ProductDescription: {
    //     cursor: 'default',
    //     textAlign: 'justify !important',
    //     hyphens: 'auto',
    //     width: '100%',
    //     maxWidth: '400px',
    //     lineHeight: '1.1 !important',
    //     wordSpacing: '0.1em !important',
    //     letterSpacing: '0em !important',
    //     margin: '-11px',
    //     padding: '10px',

    // },
   
     
    
    Model: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor:'white',
        border: '2px solid #000',
        boxShadow: 24,
        padding:'20px',

        zIndex: 999,

    },
    Box:{
        position: 'relative',
         width: '100%', 
    },
    ModelHeading:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    // crossicon:{
    //     fontSize:'1.2rem',
    //     cursor:'pointer'
    // },
    // AllCards:{
    //     display:'flex!important',
    //     flexWrap:'wrap',
    // }

});