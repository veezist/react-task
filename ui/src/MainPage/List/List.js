import React from 'react';
import FlexView from 'react-flexview/lib';
import {ListItem} from './ListItem';
import './List.css';
import PropTypes from 'prop-types';

export const List = (props) =>   {
 
        return (
       <FlexView className='list' hAlignContent='center'>
            <ul>
                    <FlexView  hAlignContent='left'>
                        <FlexView  className='nameTop'>NAME</FlexView>
                        <FlexView  className='statusTop'>STATUS</FlexView>
                    </FlexView>
                        {props.searchedServers.map(server =>
                        <ListItem key={server.id} server={server}/>)}    
            </ul>
        </FlexView>
        ) 
    }

List.propTypes={
    searchedServers: PropTypes.array.isRequired
}