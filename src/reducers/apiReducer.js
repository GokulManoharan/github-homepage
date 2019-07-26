const apiDataInitialState = [] 

const apiReducer = (state = apiDataInitialState, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return [...action.payload]
        default : 
            return [...state]
    }
}

export default apiReducer