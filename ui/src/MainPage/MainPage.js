import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSingleServerSuccess,fetchPosts} from '../actions/actions';
import {Header} from './Header/Header'
import FlexView from 'react-flexview/lib';
import {List} from './List/List';
import {getServers, getFilteredServers} from '../reducers/reducer';

class MainPage extends React.Component{

    componentWillMount(){
         const {onFetchPosts} = this.props;
         onFetchPosts();
      };

    

    render(){

        return (
        <FlexView column style={{width:'60%', margin: 'auto'}}>
        <Header {...this.props}/>
       <List {...this.props}  />
        </FlexView>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        servers:getServers(state),
        filteredServers:getFilteredServers(state)
    };
  };
  
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    onFetchPosts: fetchPosts,
    onFetchSingleServerSuccess:fetchSingleServerSuccess
  }, dispatch);
  
  export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
  
