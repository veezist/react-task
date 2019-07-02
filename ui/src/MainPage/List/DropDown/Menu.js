import React from 'react';
import FlexView from 'react-flexview/lib';
import PropTypes from 'prop-types';

export const Menu = ({server,turnOnOff,...other}) =>{ 


       const handleOnChange = () => {  
        turnOnOff(server,'ON');     
       }
       
       const handleOffChange = () => { 
        turnOnOff(server,'OFF');
       }

       const handleRebootChange = () => {  
        turnOnOff(server,'REBOOT');
       }

       
    
    return (
        server.status==='ONLINE'
        ? (
          <FlexView column className="menu">
            <button onClick={handleOffChange}>Turn off</button>
            <button onClick={handleRebootChange}>Reboot </button>
          </FlexView>
        )
        : (
          <FlexView column className="menu">
          <button onClick={handleOnChange}>Turn on</button>
        </FlexView>
    )
    )}
  

Menu.propTypes={
    turnOnOff: PropTypes.func.isRequired,
    server: PropTypes.object.isRequired
}