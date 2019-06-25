import React from 'react';
import FlexView from 'react-flexview/lib';
import './dropdown.css';
import {Menu} from './Menu';
import PropTypes from 'prop-types';




export class DropDown extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
    
     
      showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }

      closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    }


    render(){
      
        return (
       <FlexView className='dropdown' hAlignContent='right'>
           {
          this.state.showMenu
            ? (
                    <Menu turn={this.props.turn} server={this.props.server}/>
            )
            : (
                <FlexView hAlignContent='center' vAlignContent='center' style={{width:50, minHeight: 15}} onClick={this.showMenu}>
                <div className='dropdownico'/>
                <div className='dropdownico'/>
                <div className='dropdownico'/>
           </FlexView>
            )
        }
          </FlexView>
        )
        }
    }

    DropDown.propTypes={
      getServer: PropTypes.func.isRequired,
      turn: PropTypes.func.isRequired,
      server: PropTypes.object.isRequired
  }