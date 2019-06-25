import React from 'react';
import {Header} from './Header/Header'
import FlexView from 'react-flexview/lib';
import {List} from './List/List';



export class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            servers:[],
            searchedServers: [],
        };
        
        this.handleTextChange = this.handleTextChange.bind(this);
        this.fetchPosts=this.fetchPosts.bind(this);
    }
  

    async fetchPosts() {
        fetch(`http://localhost:4454/servers`)
          .then(response => response.json())
          .then(
            data =>
              this.setState({
                servers: data,
                  searchedServers: data,  
              })
          ) 
      }

    handleTextChange(searchedServers) {
        this.setState({
            searchedServers: searchedServers
        });
    }

    componentDidMount(){
        this.fetchPosts();
    }

    render(){
        
        return (
        <FlexView column style={{width:'60%', margin: 'auto'}}>
        <Header onTextChange={this.handleTextChange} servers={this.state.servers} searchedServers={this.state.searchedServers}/>
        <List  searchedServers={this.state.searchedServers} />
        </FlexView>
            
        )
    }
}
