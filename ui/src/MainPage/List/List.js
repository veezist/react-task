import React from 'react';
import FlexView from 'react-flexview/lib';
import {ListItem} from './ListItem';
import PropTypes from 'prop-types';

export class List extends React.Component{
 
    constructor(props){
        super(props);
        this.turnOnOff=this.turnOnOff.bind(this);
    }

    turnOnOff =(server,mode) => {

    const {onFetchSingleServerSuccess} = this.props;
    
      switch(mode){
        case 'ON':
                  fetch('http://localhost:4454/servers/'+server.id+'/on', { method: 'PUT'})
                .then(( response) => {
                    if ( response.ok) {
                      return response.json();
                    } else {
                      throw new Error('Something went wrong');
                    }
                  })
                  .then((responseJson) => {
                      
                    onFetchSingleServerSuccess(responseJson)
                  })
                  .catch((error) => {
                    console.log(error)
                  });
                return null;

        case 'OFF':
                  fetch('http://localhost:4454/servers/'+server.id+'/off', { method: 'PUT'})
                .then((response) => {
                    if (response.ok) {
                      return response.json();
                    } else {
                      throw new Error('Something went wrong');
                    }
                  })
                  .then((responseJson) => {
                      
                    onFetchSingleServerSuccess(responseJson)
                  })
                  .catch((error) => {
                    console.log(error)
                  });
                  return null;

        case 'REBOOT':
                  fetch('http://localhost:4454/servers/'+server.id+'/reboot', { method: 'PUT'})
                .then((response) => {
                    if (response.ok) {
                      return response.json();
                    } else {
                      throw new Error('Something went wrong');
                    }
                  })
                  .then((responseJson) => { 
                    this.checkIfRebooted(responseJson)
                  })
                  .catch((error) => {console.log(error)
                  });
                  return null;

        default: return true;  
    }  
  };

    checkIfRebooted = (server) =>{
     let x;
      const {onFetchSingleServerSuccess} = this.props;
      onFetchSingleServerSuccess(server);
      this.timer = setInterval(()=>{
          fetch('http://localhost:4454/servers/'+server.id, { method: 'GET'})
          .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong');
              }
            })
            .then((responseJson) => {
             x=responseJson;
            })
            .catch((error) => {console.log(error)
            })
            if(x!==undefined)
              { 
                if(x.status!=='REBOOTING')
                {
                  onFetchSingleServerSuccess(x)
                  clearInterval(this.timer)
                }
              }}, 1000);
  }


    render(){
        const {filteredServers,...other}=this.props
       
        return (
       <FlexView className='list' hAlignContent='left'>
            <ul>
                    <FlexView className='row' >
                        <FlexView  className='nameTop'>NAME</FlexView>
                        <FlexView  className='statusTop'>STATUS</FlexView>
                      
                    </FlexView>
                        {filteredServers.map(server =>
                        <ListItem {...other} turnOnOff={this.turnOnOff} key={server.id} server={server}/>)}    
            </ul>
        </FlexView>
        ) }
    }

List.propTypes={
  servers: PropTypes.array.isRequired,
  filteredServers: PropTypes.array.isRequired,
  onFetchPosts: PropTypes.func.isRequired,
  onFetchSingleServerSuccess: PropTypes.func.isRequired
}