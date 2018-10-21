import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import '../styles/styles.scss';

const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Login Page</h1>
			<p>Track your expenses easily.</p>
			<button className="primary-button" onClick={startLogin} >Login with Google</button>
		</div>
		
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())	
})

export default connect(undefined, mapDispatchToProps)(LoginPage);