import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Alert, Button, Form } from 'react-bootstrap';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useAuth from '../../hooks/useAuth';

const SignIn = () => {
	const navigate = useNavigate();
	const { signIn } = useAuth();

	const handleSubmit = async (
		values,
		{ setErrors, setStatus, setSubmitting }
	) => {
		try {
			// await signIn(values.email, values.password);
			navigate('/v1/home');
		} catch (error) {
			const message = error.message || 'Ocurrio un error...';
			setStatus({ success: false });
			setErrors({ submit: message });
			setSubmitting(false);
		}
	};

	const yupConfig = Yup.object().shape({
		email: Yup.string()
			.email('Must be a valid email')
			.max(255)
			.required('Email is required'),
		password: Yup.string().max(255).required('Password is required'),
	});

	return (
		<Formik
			initialValues={{ submit: false }}
			// validationSchema={yupConfig}
			onSubmit={handleSubmit}
		>
			{({
				errors,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting,
				touched,
				values,
			}) => (
				<Form onSubmit={handleSubmit}>
					{errors.submit && (
						<Alert className="my-3" variant="danger">
							<div className="alert-message">{errors.submit}</div>
						</Alert>
					)}

					<Form.Group className="mb-3">
						<Form.Label>Usuario o Email</Form.Label>
						<Form.Control
							size="lg"
							type="email"
							name="email"
							placeholder="Ingrese su usuario o email"
							value={values.email}
							isInvalid={Boolean(touched.email && errors.email)}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						{!!touched.email && (
							<Form.Control.Feedback type="invalid">
								{errors.email}
							</Form.Control.Feedback>
						)}
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Password</Form.Label>
						<Form.Control
							size="lg"
							type="password"
							name="password"
							placeholder="Contraseña"
							value={values.password}
							isInvalid={Boolean(
								touched.password && errors.password
							)}
							// onBlur={handleBlur}
							onChange={handleChange}
						/>
						{!!touched.password && (
							<Form.Control.Feedback type="invalid">
								{errors.password}
							</Form.Control.Feedback>
						)}
						<small>
							<Link to="/resetpassword">
								¿Olvidaste tu contraseña?
							</Link>
						</small>
					</Form.Group>

					<div>
						<Form.Check
							type="checkbox"
							id="rememberMe"
							label="Recordar mi usuario"
							defaultChecked
						/>
					</div>

					<div className="text-center mt-3">
						<Button
							type="submit"
							variant="primary"
							className="btn-pill"
							size="lg"
							disabled={isSubmitting}
						>
							<FontAwesomeIcon icon={faSignInAlt} /> Ingresar
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default SignIn;
