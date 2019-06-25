import React from 'react';
import FlexView from 'react-flexview/lib';
import './List.css';
import xCross from './close.svg';
import {DropDown} from './DropDown/DropDown';
import PropTypes from 'prop-types';

const statusStyles={
    online: {
        height: 9,
        width: 9,
        backgroundColor:'#33CAD4',
        borderRadius: 50,
        marginRight: 10 
    },
    onlineText: {
        color: '#24A1A9',
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize:13,    
    },

    offlineText:{  
        color:'#000000',
        fontFamily: 'Montserrat',
        fontSize:13,
        fontWeight: 600
    },

    offline:{
        height: 12,
        width: 12,
        marginRight: 7
    },

    rebooting: {
        opacity: 0.3,
        fontSize:13,
        fontWeight: 600
    }
}

export class ListItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            server:this.props.server
        }
        this.fetchServer=this.fetchServer.bind(this);
        this.turnOnOff=this.turnOnOff.bind(this);
    };

    turnOnOff(id,mode) {
        

        switch(mode){
                case 'ON':
                            if(this.state.server.status==='OFFLINE')
                        {   
                            fetch('http://localhost:4454/servers/'+id+'/on', { method: 'PUT'})
                            .then(response => response.json()).then(data=>this.setState({
                                server:data
                            })).catch((error) => {
                                console.error(error);
                            });
                        }
                        return null;
                case 'OFF':
                        if(this.state.server.status==='ONLINE')
                        { 
                            fetch('http://localhost:4454/servers/'+id+'/off', { method: 'PUT'})
                            .then(response => response.json()).then(data=>this.setState({
                             server:data
                         })).catch((error) => {
                            console.error(error);
                        })
                        }
                         return null;

                case 'REBOOT':
                         fetch('http://localhost:4454/servers/'+id+'/reboot', { method: 'PUT'})
                         .then(response => response.json()).then(data=>this.setState({
                             server:data
                         })).catch((error) => {
                            console.error(error);
                        });
                         this.checkIfRebooted();
                         return null;
            
            default: return true;  
        }  
    };

    async fetchServer(id){
        if(this.state.server.status==='REBOOTING')
       { 
           fetch(`http://localhost:4454/servers/`+id, {method: 'GET'})
            .then((response) => response.json())
            .then(data =>
              this.setState({
                server: data,    
              }))
         .catch((error) => {
             console.error(error);
         });
        }};



    ChooseStatus(status){

        switch(status){
            case 'ONLINE':
                return  <FlexView vAlignContent='center'  className='status'><div  style={statusStyles.online}></div><p style={statusStyles.onlineText}>{status}</p></FlexView>;
            case 'OFFLINE':
                return  <FlexView vAlignContent='center'  className='status'><img style={statusStyles.offline} src={xCross} alt='cross'/> <p style={statusStyles.offlineText}>{status}</p></FlexView>;
            case 'REBOOTING':
                return  <FlexView vAlignContent='center' className='status'><div style={statusStyles.rebooting}></div><p style={statusStyles.rebooting}>{status}...</p></FlexView>;
            default: 
            return null;
        }
    }

    checkIfRebooted(){
       
        this.timer = setInterval(()=> this.fetchServer(this.state.server.id), 1000);
       
       }


    render(){

        return (
            <FlexView  className='item'>
                <FlexView  hAlignContent='left' className='name'>
                    <p>{this.props.server.name}</p>
                </FlexView>
                <FlexView  hAlignContent='right' className='status'>
               {this.ChooseStatus(this.state.server.status===null?this.props.server.status :this.state.server.status)}
                </FlexView>
                <FlexView    vAlignContent='center'>
                <DropDown getServer={this.fetchServer} turn={this.turnOnOff} server={this.state.server} />
                </FlexView>
            </FlexView>
        )
    }
}

ListItem.propTypes={
    server: PropTypes.object.isRequired
}

