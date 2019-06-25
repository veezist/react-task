import React from 'react';
import FlexView from 'react-flexview/lib';
import search from './search.svg';
import './Header.css';
import PropTypes from 'prop-types';


export class Search extends React.Component{
constructor(props){
    super(props)
    
    this.handleChange = this.handleChange.bind(this);
}

handleChange = (e) => {

    let searchString = e.target.value.replace(/&\/\\#,+()$~%.'":*?<>{}/g, '').toLowerCase();
    let servers=this.props.servers;
    
    if (searchString.length > 0) {  
        servers = servers.filter(function(i) { 

          return i.name.toLowerCase().match(searchString);      
        });
      }

    this.props.onTextChange(servers);
  }

    render() {
       
        return (
          <FlexView className='searchStyle'>
            <img className='magnifyingGlass'  src={search} alt='tak'/>
            <input onChange={this.handleChange} className='searchInput'  type="text" placeholder="Search" />
          </FlexView>
        );
      }
      
}

Search.propTypes={
  onTextChange: PropTypes.func,
  servers: PropTypes.array.isRequired
}
