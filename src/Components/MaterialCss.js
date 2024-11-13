import { makeStyles } from '@mui/styles';
import "@fontsource/inter";
import "@fontsource/poppins";
// import { fontSize } from '@mui/system';
export const UseStyles = makeStyles({

    AppBar: {
        backgroundColor: 'transparent!important',
        boxShadow: 'none!important',
        zIndex: '1',
        padding:'0px 50px',
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
    parentContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProductButton: {
        border: '2px solid #c3bcbc!important',
        color: '#fff!important',

        marginTop: '2rem!important',
        margin: 'auto!important',
        // marginRight: '2rem!important',

    },

    navMenus: {
        margin: 'auto',
    },
     
    cardContainer: {
        margin: '100px 100px',
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingBottom: '100px', 
    },

    card: {
        width: '300px',
       
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        margin: '10px',
        boxSizing: 'border-box',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        overflowX: 'hidden',
       
    },
    productPrice: {
        fontWeight: 'bold',
    },

    cartButton: {
        border: "none!important",
        outline: 'none',
        paddingLeft: '0px',
        cursor: 'pointer',
        fontSize: '1.2rem',
    },

    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },







    img: {

        width: '200px',
        height: '150px',
        objectFit: 'contain',
        margin: 'auto',

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
        // display: 'flex',
        fontSize:'1rem',
        flexwrap: 'wrap',
        // justifyContent: 'center',
        cursor: 'default',

    },
    
    footer: {
        backgroundImage: 'linear-gradient(to right top, #141417, #101316, #0d1313, #0c110f, #0e0f0a)',
        width: '100%',
        height: 'auto',
        marginTop: '50px', 
    },
    ul: {
        // display:'flex',
        color: '#fff',
        display: 'block',
        padding: '50px 100px  ',
        lineHeight: '35px',
        listStyle: 'none',
        fontFamily:'Inter',
        fontWeight:'500',
        '& li':{
            cursor:'pointer'
        }

    },
    footerHead:{
       borderBottom:'5px solid #ff0f7b',
       borderRadius:'5px',
       paddingBottom:'4px',
       marginBottom:'5px',
    },
    // li:{

    // },
    productDescription: {
        cursor: 'default',
        textAlign: 'justify !important',
        hyphens: 'auto',
        width: '100%',
        maxWidth: '400px',
        lineHeight: '1.1 !important',
        wordSpacing: '0.0em !important',
        letterSpacing: '0em !important',
        // margin: '-11px',
        // padding: '10px',

    },



    Model: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        padding: '20px',

        zIndex: 999,

    },
    Box: {
        position: 'relative',
        width: '100%',
    },
    ModelHeading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    banner: {
        display: 'block',
        marginTop: '50px',
        margin: '0 auto',
        width: '1400px',
        // padding: '0px 50px',
        height: '450px',
        borderRadius:'10px!important',
    },
    socialicons:{
        display:'flex',
        gap:'15px',
        fontSize:'1.2rem',
        '&:hover':{
        transition: '1s ease',
        fontSize:'1.3rem',
        }
    },
    noProductsMessage:{
        color:'#fff',
        fontFamily:'poppins',
        fontSize:'1.3rem',
        display:'flex',
        justifyContent:'center',
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