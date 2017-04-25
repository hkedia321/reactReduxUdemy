import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{
  handleFormSubmit({email, password}){
    console.log("Form:",email,password);
    this.props.signinUser({email, password});
  }
  renderError(){
    if(this.props.errorMessage){
      return(
        <h3 style={{color:red}} >{this.props.errorMessage}</h3>
      );
    }
  }
  render(){
    const {handleSubmit, fields: {email, password}} = this.props;

    return(
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <input type="email" name="email" placeholder="Email..." />
        <input type="password" name="password" placeholder="Email..." />
        {this.renderError()}
        <input type="submit" name="submit" value="signin" />
    </form>
  );
  }
}

function mapStateToProps(state){
  return {errorMessage:state.auth.error};
}
export default reduxForm({
  form: 'signin',
  fields: ['email','password']
}, mapStateToProps, actions)(Signin);
