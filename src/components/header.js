import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class Header extends Component{
  render(){



    return(
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {this.props.authenticated && (<li><Link to="/signout">Sign Out</Link></li>)}
        {!this.props.authenticated && (<li><Link to="/signin">Sign in</Link></li>)}
        {!this.props.authenticated && (<li><Link to="/signup">Sign Up</Link></li>)}
      </ul>
    </div>
  );
  }
}

function mapStateToProps(state){
return {
  authenticated:state.auth.authenticated
};
}
export default connect(mapStateToProps)(Header);
