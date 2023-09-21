// redux/actions/userActions.js
export const setUserName = (username) => {
    return {
      type: 'SET_USERNAME',
      payload: username,
    };
  };