import React from "react";
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Theme
import theme from "../theme";
import './NavigationBar.css';

// Data
import { links, email } from '../data';


// Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Bar = styled('div')({
    padding: '7px 10px',
    justifyContent: 'space-between',
    display: 'flex',
    fontWeight: 600,
    backgroundColor: theme.palette.backgroundNav, /*241818*/
    position: 'fixed',
    top: 0,
    width: 'calc(100vw - 20px)',
    maxWidth: '100vw',
    maxHeight: '79px',
    zIndex: '10',
    backdropFilter: 'blur(8px)',
    '@media (max-width:800px)': {
        backgroundColor: theme.palette.background2Nav, /*241818*/
    },
});

// Icon Hover Effects

const hoverSX = { // Annoying to get theme color into CSS so we're doing JS for this one.
    fontSize: 32,
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '15px',
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.accent,
    //   cursor: 'pointer',
    },
  };


function NavigationBar({ title, activeSection, sections, changeSection }) {

    return (
        <Bar onClick={() => {changeSection(title)}} className={`button transition-all ${activeSection === title ? 'on' : 'off' }`} >
             <a href="/" className="logo">
                <Typography className="fade-in" variant="logo" color={theme.palette.primary.main}>
                    The Helper
                </Typography>
            </a>
            <div style={{ display: window.innerWidth < 700 ? 'none' : 'flex' }}>
                <a href="/#who-we-are" className="navbar-button" sx={hoverSX}>
                    <Typography className="fade-in" variant="h2" >
                        Who We Are
                    </Typography>
                </a>
                <a href="/#mission" className="navbar-button" sx={hoverSX}>
                    <Typography className="fade-in" variant="h2" >
                        Mission
                    </Typography>
                </a>
                <a href="/#give" className="navbar-button" sx={hoverSX}>
                    <Typography className="fade-in" variant="h2" >
                        Give
                    </Typography>
                </a>
                <a href={links.linkedin} className="fade-in"><LinkedInIcon sx={hoverSX} /></a>
                <a href={links.facebook} className="fade-in"><FacebookIcon sx={hoverSX} /></a>
                <a href={links.instagram} className="fade-in"><InstagramIcon sx={hoverSX} /></a>
            </div>
        </Bar>
    );
}

export default NavigationBar;
