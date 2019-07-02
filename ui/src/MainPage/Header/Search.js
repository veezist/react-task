import React from 'react';
import FlexView from 'react-flexview/lib';
import search from './search.svg';
import './Header.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts,filterServers} from '../../actions/actions';
import {getServers, getFilteredServers} from '../../reducers/reducer';


class Search extends React.Component{
constructor(props){
    super(props)
    
    this.handleChange = this.handleChange.bind(this);
}
handleChange = (e) => {
  const {onFilterServers,servers,filteredServers}=this.props

    let searchString = e.target.value.replace(/&\/\\#,+()$~%.'":*?<>{}/g, '').toLowerCase();
   
    let allServers;
   if(allServers===undefined)
    allServers=servers;
   else if(allServers.length>=this.filteredServers.length)
   allServers=servers;
  else
   allServers=filteredServers;

  
    if (searchString.length > 0) {  
      allServers = allServers.filter(function(i) { 

          return i.name.toLowerCase().match(searchString);      
        });
      }

      onFilterServers(allServers);
  }

  
    render() {

console.log(this.props)
        return (
          <FlexView className='searchStyle'>
            <img className='magnifyingGlass'  src={search} alt='tak'/>
            <input onChange={this.handleChange} className='searchInput'  type="text" placeholder="Search" />
          </FlexView>
        );
      }
      
}

Search.propTypes={
  onTextChange: PropTypes.func
}
const mapStateToProps = state => {
  return { 
    servers: getServers(state),
    filteredServers:getFilteredServers(state)
  };
};


const mapDispatchToProps = dispatch => bindActionCreators({
  onFetchPosts: fetchPosts,
  onFilterServers: filterServers
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Search);

