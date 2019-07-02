import React from 'react';
import FlexView from 'react-flexview/lib';
import {Menu} from './Menu';
import PropTypes from 'prop-types';

export class DropDown extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
        };
      }
    
      showMenu = () => {
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }

      closeMenu = () => {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    }


    render(){
     const {...other}=this.props
     
        return (
       <FlexView  hAlignContent='right'>
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
  servers: PropTypes.array,
  onFetchPosts: PropTypes.func,
  onFetchSingleServerSuccess: PropTypes.func,
  server: PropTypes.object,
  turnOnOff:PropTypes.func
  }
  