import React from "react";
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Data
import { mission, verse, links } from '../data';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Theme
import theme from "../theme";
import './Footer.css';


const hoverSX = { // Annoying to get theme color into CSS so we're doing JS for this one.
    fontSize: 32,
    marginLeft: '-5px',
    marginRight: '17px',
    marginTop: '15px',
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.accent,
    //   cursor: 'pointer',
    },
  };

const Container = styled('div')({
    width: '100vw',
    minHeight: '50vh',
    backgroundColor: theme.palette.background,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '@media (max-width:700px)': {
        flexDirection: 'column',
        // backgroundColor: theme.palette.background2Nav, /*241818*/
    },
});

const Column1 = styled('div')({
    minWidth: '45vw',
    // minHeight: '50vh',
    backgroundColor: theme.palette.background,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // '@media (max-width:800px)': {
    //     backgroundColor: theme.palette.background2Nav, /*241818*/
    // },
});

const Column2 = styled('div')({
    minWidth: '45vw',
    // minHeight: '50vh',
    backgroundColor: theme.palette.background,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    // '@media (max-width:800px)': {
    //     backgroundColor: theme.palette.background2Nav, /*241818*/
    // },
});

const Divider = styled('div')({
    width: '1px',
    height: '70%',
    margin: '10% 0',
    backgroundColor: theme.palette.primary.white,
    backgroundSize: 'cover',
    // '@media (max-width:800px)': {
    //     backgroundColor: theme.palette.background2Nav, /*241818*/
    // },
});

function Footer({ title, body1, body2, changeSection, Button }) {

    return (
        <Container>
            <Column1>
                <Typography id="#mission" variant="h1" style={{ color: theme.palette.primary.white, textAlign: 'center', textWrap: 'nowrap', margin: '2em'}}>
                    Join the Movement
                </Typography>
                <Button>
                    <Typography variant="subtitle1" style={{ color: theme.palette.primary.white, textAlign: 'center'}}>
                        Give Now
                    </Typography>
                </Button>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }} >
                    <div style={{ height: '1px', width: '30px', backgroundColor: theme.palette.primary.white, marginRight: '18px' }} />
                        <Typography variant="h1" style={{ color: theme.palette.primary.white, textAlign: 'center', fontSize: '20px'}}>
                            OR
                        </Typography>
                    <div style={{ height: '1px', width: '30px', backgroundColor: theme.palette.primary.white, marginLeft: '18px' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '355px', marginLeft: '2rem', marginRight: '2rem'  }}>
                    <input placeholder="myemail@gmail.com" style={{
                        backgroundColor: '#00000000',
                        borderRadius: '6px',
                        borderColor: theme.palette.primary.white,
                        border: 'solid 1px',
                        width: '30vw',
                        height: '36px',
                        paddingLeft: '0.75rem',
                        color: 'white',
                        marginRight: '6px',
                    }}>

                    </input>
                    <button onClick={() => {console.log('subscribed!')}} style={{
                        height: '40px',
                        backgroundColor: '#FB8546',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '6px',
                        border: 'solid',
                        borderColor: '#FB8546',
                        borderLeft: 'none',
                        color: 'white',
                        padding: '0 0.75rem',
                        "&:hover": {
                            backgroundColor: theme.palette.primary.accent,
                            cursor: 'pointer',
                        }
                    }}>
                        SUBSCRIBE
                    </button>
                </div>
            </Column1>  

            <Divider />

            <Column2>
                <Typography id="#footer" variant="h1" style={{ color: theme.palette.primary.white, textAlign: (window.innerWidth < 700 ? 'center' : 'left'), margin: '2em'}}>
                    Info
                </Typography>
                <Typography  variant="body1" style={{ color: theme.palette.primary.white, textAlign: (window.innerWidth < 700 ? 'center' : 'left'), margin: '0 3rem'}}>
                    123-456-7890
                    <br />
                    info@thehelperorg.com
                    <br />

                    <a href={links.linkedin} className="fade-in"><LinkedInIcon sx={hoverSX} /></a>
                    <a href={links.facebook} className="fade-in"><FacebookIcon sx={hoverSX} /></a>
                    <a href={links.instagram} className="fade-in"><InstagramIcon sx={hoverSX} style={{ marginRight: 0 }}/></a>
                </Typography>

                <div>

                </div>

            </Column2>
        </Container>
    );
}

export default Footer;
