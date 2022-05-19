function authReducer(
  prevState: any,
  action: {
    type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
    payload: any;
  }
) {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case "SIGN_IN":
      return {
        ...prevState,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isAuthenticated: false,
        isLoading: false,
        user: undefined,
      };
    default: {
      prevState;
    }
  }
}

export default authReducer;
