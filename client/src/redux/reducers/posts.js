


export default (posts= [], action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            
            return action.payload;//our actual post
        case 'CREATE':

            return posts;
    
        default:
            return posts;
    }
}