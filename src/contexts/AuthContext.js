import React, { Component, createContext } from "react";

// Create a new context and the context provider here
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };
  toggleAuthentication = () =>
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          toggleAuthentication: this.toggleAuthentication
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
