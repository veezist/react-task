import React from 'react';
import FlexView from 'react-flexview/lib';
import PropTypes from 'prop-types';

export class Menu extends React.Component
{ 

       handleOnChange = () => {  
        this.props.turn(this.props.server.id,'ON');     
       }
       
       handleOffChange = () => { 
        this.props.turn(this.props.server.id,'OFF');
       }

       handleRebootChange = () => {  
        this.props.turn(this.props.server.id,'REBOOT');
       }

    
    render()
   { 
    
    return (
        this.props.server.status==='ONLINE'
        ? (
          <FlexView column className="menu">
            <button onClick={this.handleOffChange}>Turn off</button>
            <button onClick={this.handleRebootChange}>Reboot </button>
          </FlexView>
        )
        : (
          <FlexView column className="menu">
          <button onClick={this.handleOnChange}>Turn on</button>
        </FlexView>

    )
    )}
  }

Menu.propTypes={
    turn: PropTypes.func.isRequired,
    server: PropTypes.object.isRequired
}