import {FETCH_SERVERS_ERROR,FETCH_SERVERS_SUCCESS,FILTER_SERVERS,FETCH_SINGLE_SERVER_SUCCESS} from '../actions/actions';

export const reducer = (state=[], action)=>{

    switch(action.type){
        case FETCH_SERVERS_SUCCESS:
                return{
                    ...state,
                    servers:action.payload.servers,
                    filteredServers: action.payload.servers
                }
        case FETCH_SERVERS_ERROR:
                return {
                    ...state,
                    error: action.error
                }
        case FILTER_SERVERS:
            return{
                ...state,
                filteredServers: action.payload.servers
            }
        case FETCH_SINGLE_SERVER_SUCCESS:
                
                return { 
                    ...state, 
                    filteredServers: [
                       ...state.filteredServers.slice(0,action.payload.server.id-1),
                       action.payload.server,
                      ...state.filteredServers.slice(action.payload.server.id)
                      ],
                      servers:  [
                        ...state.servers.slice(0,action.payload.server.id-1),
                        action.payload.server,
                       ...state.servers.slice(action.payload.server.id)
                       ],
                 }



                // return state.servers.map((item, index) => {
                //     if (index !== action.server.id) {
                //       // This isn't the item we care about - keep it as-is
                //       return item
                //     }
                
                //     // Otherwise, this is the one we want - return an updated value
                //     return {
                //       ...item,
                //       ...action.server
                //     }})




                // return{
                //     ...state, // copy state
                //     filteredServers: {
                //       ...state.filteredServers, // copy houses
                //       [action.payload.server.id]: {  // update one specific house (using Computed Property syntax)
                //         ...state.filteredServers[action.payload.server.id],  // copy that specific house's properties
                //         status:action.payload.server.status   // update its `points` property
                //       }
                //     }
                //   }
                default:
                        return state;
       
    }
};

export const getServers = state => state.servers;
export const getFilteredServers = state => state.filteredServers;
