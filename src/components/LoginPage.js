import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';
import '../styles/styles.scss';

const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Login</h1>
			<p>Registrá todos tus gastos e ingresos.</p>
			<button className="primary-button" onClick={startLoginGoogle} >Google</button>
			<button className="primary-button" onClick={startLoginFacebook} >Facebook</button>
		</div>
		
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLoginGoogle: () => dispatch(startLoginGoogle()),
	startLoginFacebook: () => dispatch(startLoginFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);