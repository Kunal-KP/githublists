export default function (state=null , action) {
    switch (action.type) {
        case 'TOTAL_STARRED_REDUCER':
            console.log("Payload Inside reducer-starre.js "+action.payload);
            //return Object.assign({},state,{starred:action.payload});
            console.log("State inside reducer-starred.js "+state);
            return action.payload;
            break;

    }
    return state;
}