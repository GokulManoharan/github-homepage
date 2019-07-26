import axios from 'axios'

export const fetchData = (data) => {
    return({
        type : 'FETCH_DATA',
        payload : data
    })
}

export const startFetchData = () => {
    return (dispatch) => {
        axios.get('https://api.github.com/users/supreetsingh247/repos')
            .then(response =>  dispatch(fetchData(response.data)) )
    }
}