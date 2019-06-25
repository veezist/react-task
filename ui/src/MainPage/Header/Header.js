import React from 'react';
import FlexView from 'react-flexview/lib';
import {Search} from './Search'
import PropTypes from 'prop-types';



export const Header = (props) => {

        return (
        <FlexView vAlignContent='center' hAlignContent='right' >
            <FlexView marginRight='auto' column hAlignContent='left'>
                <FlexView column className='info' hAlignContent='left'>
                    <p style={{fontWeight: 600, fontSize: 21}}>Servers</p>
                    <p style={{fontSize: 15}}>Number of elements: {props.searchedServers.length} </p>
                </FlexView>
            </FlexView>
            <Search onTextChange={props.onTextChange} servers={props.servers}/>
        </FlexView>
           
        )
    }
    Header.propTypes={
        onTextChange: PropTypes.func,
        servers: PropTypes.array.isRequired,
        searchedServers: PropTypes.array.isRequired
      }
      
