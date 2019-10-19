export const initialState = {
    loading : true,
    movies: [],
    errorMessage:null
};

export const reducer = (state, action)=>{
    switch(action.type){
        case "SEARCH_MOVIE_REQUEST":
            return{
                ...state,
                loading:true,
                errorMessage :null
            };
        case "SEARCH_MOVIE_SUCCESS":
            return{
                ...state,
                loading: false,
                movies:action.payload
            };
        case "SEARCH_MOVIE_FAILURE":
            return{
                ...state,
                loading:false,
                errorMessage :action.error
            };
            default:
                return state;        
    }
};