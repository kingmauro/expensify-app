import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<div>The info is: {props.info}</div>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>-------- Private Section --------</p>}
			<WrappedComponent {...props}/>
		</div>
	);
}

const AdminInfo = withAdminWarning(Info);



const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated === true ? <WrappedComponent {...props}/> : <p>-------- Please Log in --------</p>}
		</div>
	);
}

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));çReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));