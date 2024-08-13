const themeReducer = (state, action) => {
    switch(action.type) {
      case 'bg-1':
        return { ...state, background: 'bg-1' };
      case 'bg-2':
        return { ...state, background: 'bg-2' }; 
      default:
        return state;
    }
  };
  
  export default themeReducer;
  