
export const FETCH_SERVERS_SUCCESS = 'FETCH_SERVERS_SUCCESS';
export const FETCH_SERVERS_ERROR = 'FETCH_SERVERS_ERROR';
export const FILTER_SERVERS = 'FILTER_SERVERS';
export const FETCH_SINGLE_SERVER_SUCCESS = 'FETCH_SINGLE_SERVER_SUCCESS';


const fetchServerSuccess =(servers)=>{

    return {
        type: FETCH_SERVERS_SUCCESS,
        payload: {
            servers:servers
        }
    }
}

const fetchServersError = (error) => {
    return {
        type: FETCH_SERVERS_ERROR,
        error: error
    }
}

export const filterServers =(servers)=>{

    return {
        type: FILTER_SERVERS,
        payload: {
            servers:servers
        }
    }
}

export const fetchPosts = () => {
    return dispatch => {
        fetch('http://localhost:4454/servers')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchServerSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchServersError(error));
        }) 
    }
  }

  export const fetchSingleServerSuccess =(server)=>{
    return {
        type: FETCH_SINGLE_SERVER_SUCCESS,
        payload: {
            server:server
        }
    }
    
    }


 

