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
     const {...other}=this.props
     
        return (
       <FlexView className='dropdown' hAlignContent='right'>
           {
          this.state.showMenu
            ? (
                    <Menu {...other}/>
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
     
      turn: PropTypes.func.isRequired,
      server: PropTypes.object.isRequired
  }