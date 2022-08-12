import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from 'react-bootstrap';

import SignIn from '../../components/auth/SignIn';
// import avatar from '../../assets/img/avatars/avatar.jpg';

import Lottie from 'react-lottie';
import animacionLogin from '../../assets/lottie/50124-user-profile.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animacionLogin,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const SignInPage = () => (
	<React.Fragment>
		<Helmet title="Login" />
		<div className="text-center mt-4">
			<h2>Bienvenido!</h2>
			<p className="lead">
				Ingrese su usuario y contraseña para poder continuar
			</p>
		</div>

		<Card>
			<Card.Body>
				<div className="m-sm-4">
					<div className="text-center">
						<Lottie
							options={defaultOptions}
							height={300}
							width={300}
						/>
					</div>
					<SignIn />
				</div>
			</Card.Body>
		</Card>
	</React.Fragment>
);

export default SignInPage;
