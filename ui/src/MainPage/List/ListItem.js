import React from 'react';
import FlexView from 'react-flexview/lib';
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

export const ListItem = ({server,...other}) => {

    const ChooseStatus = (status) => {

        switch(status){
            case 'ONLINE':
                return <FlexView vAlignContent='center'  className='status'><div  style={statusStyles.online}></div><p style={statusStyles.onlineText}>{status}</p></FlexView>;
            case 'OFFLINE':
                return <FlexView vAlignContent='center'  className='status'><img style={statusStyles.offline} src={xCross} alt='cross'/> <p style={statusStyles.offlineText}>{status}</p></FlexView>;
            case 'REBOOTING':
                return <FlexView vAlignContent='center' className='status'><div style={statusStyles.rebooting}></div><p style={statusStyles.rebooting}>{status}...</p></FlexView>;
            default: 
            return null;
        }
    }
    

        return (
            <FlexView  className='item'>
                <FlexView  hAlignContent='left' className='name'>
                    <p>{server.name}</p>
                </FlexView>
                <FlexView  hAlignContent='left' className='status'>
               {ChooseStatus(server.status)}
                </FlexView>
                <FlexView   hAlignContent='right' className='dropdown' vAlignContent='center'>
                <DropDown {...other} server={server} />
                </FlexView>
            </FlexView>
        )
    }


ListItem.propTypes={
    server: PropTypes.object.isRequired,
    turnOnOff:PropTypes.func.isRequired
    }

