import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { useRouteError } from "react-router-dom";
import { Typography } from '@mui/material';

// Data
import { bannerTitle, bannerSubtitle, ourStory, mission } from '../data';

// Components
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Banner from '../banner.svg';
import CEO from '../timcho.jpg';
import COO from '../josiah.jpg';
import Finance from '../profile-placeholder.jpg';
import Media from '../profile-placeholder.jpg';
import Bible from '../bible.jpg';

// Theme
import theme from "../theme";

// Styled Components
const Button = styled('button')(({ backgroundColor, bWidth }) => ({
    height: (bWidth < 580 ? '40px' : '51px'),
    width: (bWidth < 580 ? '151px' : '191px'),
    margin: '3px',
    borderRadius: '3px',
    borderColor: `${ backgroundColor ? 'transparent' : theme.palette.primary.white }`,
    borderStyle: 'solid',
    borderWidth: '1px',
    position: 'relative',
    backgroundColor: `${backgroundColor ? backgroundColor : 'transparent'}`,
    // background: `radial-gradient(circle at ${props.mouseX}px ${props.mouseY}px, #203E2580, #0E1B10 60%)`
    "&:hover": {
        borderColor: theme.palette.primary.accent,
        cursor: 'pointer',
        backgroundColor: `${backgroundColor ? theme.palette.primary.accent2 : 'transparent'}`
    },
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
  }));

  const TeamWrapper = styled('div')(({ props }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '0 2rem',
  }));

  const TeamMember = styled('div')(({ props }) => ({
    width: '15%',
    minWidth: '195px',
    margin: '0 0 20px 30px',
  }));


  const imageSX = { // profile images
    boxShadow: '0 4px 4px 0 #00000040', 
    objectFit: 'cover', 
    width: '20vw', 
    height: '20vw',
    minHeight: '120px',
    maxHeight: '150px',
    minWidth: '120px',
    maxWidth: '150px',
    borderRadius: '1000px',
  };

const transitionSX = {
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.15s',
}


function TeamMembers() {

    return (
        <TeamWrapper>
            <TeamMember>
                <img src={CEO} alt="img of CEO" style={imageSX}>

                </img>
                <Typography variant="h1" style={{ color: theme.palette.primary.white, fontSize: '16px', margin: '10px 0 0', textAlign: 'center'}}>
                    Tim Cho
                </Typography>
                <Typography variant="h3" style={{ color: theme.palette.primary.accent, fontSize: '14px', letterSpacing: '1px', margin: '3px 0', textAlign: 'center'}}>
                    CEO
                </Typography>
            </TeamMember>
            <TeamMember>
                <img src={COO} alt="img of COO" style={imageSX}>

                </img>
                <Typography variant="h1" style={{ color: theme.palette.primary.white, fontSize: '16px', margin: '10px 0 0', textAlign: 'center'}}>
                    Josiah Turnquist
                </Typography>
                <Typography variant="h3" style={{ color: theme.palette.primary.accent, fontSize: '14px', letterSpacing: '1px', margin: '3px 0', textAlign: 'center'}}>
                    COO
                </Typography>
            </TeamMember>
            <TeamMember>
                <img src={Finance} alt="img of CFO" style={imageSX}>

                </img>
                <Typography variant="h1" style={{ color: theme.palette.primary.white, fontSize: '16px', margin: '10px 0 0', textAlign: 'center'}}>
                    Hunter Lastname
                </Typography>
                <Typography variant="h3" style={{ color: theme.palette.primary.accent, fontSize: '14px', letterSpacing: '1px', margin: '3px 0', textAlign: 'center'}}>
                    FINANCE
                </Typography>
            </TeamMember>
            <TeamMember>
                <img src={Media} alt="img of Media Coordinator" style={imageSX}>

                </img>
                <Typography variant="h1" style={{ color: theme.palette.primary.white, fontSize: '16px', margin: '10px 0 0', textAlign: 'center'}}>
                    Nathan Dungan
                </Typography>
                <Typography variant="h3" style={{ color: theme.palette.primary.accent, fontSize: '14px', letterSpacing: '1px', margin: '3px 0', textAlign: 'center', textTransform: 'uppercase'}}>
                    Media
                </Typography>

            </TeamMember>

        </TeamWrapper>

    );
}

const MissionContainer = styled('div')({
    width: '100vw',
    minHeight: '50vh',
    background: `linear-gradient(0deg, rgba(0 0 0 / 74%), rgba(0 0 0 / 89%)), url(${Bible})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

export default function HomePage() {
    const [hash, setHash] = useState('about'); 
    const [section, setSection] = useState('Tech'); 

    // Sections
    const changeSection = (s) => {
        console.log(section, s);
        setSection(s);
      }
  
    // Device Type
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const mobile = 450;
    const tablet = 750;
    const desktop = 1200;

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


  return (
    <div id="home-page" style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', marginTop: '20%'}}>
        <NavigationBar changeSection={changeSection}/>
        <img src={Banner} key="logo" alt="logo background" style={{
            position: 'fixed',
            width: '110vw',
            zIndex: '-10',
            top: '50%',
            left: '50%',
            minWidth: '600px',
            transform: 'translate(-50%, -65%)',
        }}/>    
        <Typography className="fade-in" variant="h3" style={{ color: theme.palette.primary.white, maxWidth: (width < mobile ? '80vw' : '390px'), margin: (width < tablet ? '10vh 0 0 10vw' : '0 10vw')}}>
            {bannerTitle}
        </Typography>
        <Typography className="fade-in" variant="subtitle1" style={{ color: theme.palette.primary.white, maxWidth: (width < tablet ? '80vw' : '45vw'), margin: (width < mobile ? '2em 10vw 2em 10vw' : '2em 40vw 2em 10vw')}}>
            {bannerSubtitle}
        </Typography>
        <div>
            <Button className="fade-in" bWidth={width} style={{ marginLeft: '10vw' }} >
                <Typography variant="subtitle1" style={{ color: theme.palette.primary.white, textAlign: 'center'}}>
                    Give
                </Typography>
            </Button>
            <Button className="fade-in" bWidth={width} style={{ marginLeft: (width < mobile ? '15px' : '45px') }} backgroundColor={theme.palette.primary.accent}>
                <Typography variant="subtitle1" style={{ color: theme.palette.primary.black, textAlign: 'center'}}>
                    Subscribe
                </Typography>
            </Button>
        </div>

        <div style={{ backgroundColor: theme.palette.background2, width: '100vw', marginTop: '20%'}}>
            <Typography variant="h1" style={{ color: theme.palette.primary.white, textAlign: 'left', margin: '2em'}}>
                Who we are 
            </Typography>
            <Typography variant="body1" style={{ color: theme.palette.primary.white, textAlign: 'left', margin: '3.2em', maxWidth: '89vw'}}>
                {ourStory}
            </Typography>
            <Typography variant="h1" style={{ color: theme.palette.primary.white, textAlign: 'left', margin: '2em'}}>
                our team
            </Typography>
            <TeamMembers />
        </div>

        {/* // Mission */}

        <MissionContainer>
            {/* <img src={Bible} key="mountains" alt="mountain background" style={{
                position: 'fixed',
                top: '69px',
                right: '-4%',
                width: '110vw',
                zIndex: '-10',
            }}/>    */}
        <   Typography id="#mission" variant="h1" sx={transitionSX} style={{ color: theme.palette.primary.white, textAlign: 'left', margin: '2em'}}>
                Our Mission
            </Typography>
        
            <Typography className="fade-in" variant="body1" sx={transitionSX} style={{ color: theme.palette.primary.white, textAlign: 'left', margin: '3.2em', maxWidth: (width < tablet ? '90vw' : '40vw')}}>
                {mission}
            </Typography>

            <br />

            <div className="fade-in" sx={transitionSX} style={{ height: '1px', width: '20vw', backgroundColor: theme.palette.primary.white, margin: (width < tablet ? '3rem 3.2rem' : '12vw 0 0 46vw')}}/>
            <Typography className="fade-in" variant="body1" sx={transitionSX} style={{ color: theme.palette.primary.white, textAlign: 'left', margin: (width < tablet ? '3rem 3.2rem' : '3rem 0 5rem 45vw'), maxWidth: (width < tablet ? '90vw' : '45vw')}}>
                "But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you." 
                <br />
                 <> </>-  Matthew 6:3-4 (NIV)
            </Typography>
        </MissionContainer>

        <Footer Button={Button}/>
      </div>
  );
}