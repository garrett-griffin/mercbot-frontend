// src/pages/authentication/Register/RegisterForm.tsx
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, Link } from 'react-router-dom'
import { FormInputPassword, FormTextInput } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'sonner'

const RegisterForm = () => {
	const schemaResolver = yup.object().shape({
		reg_email: yup
			.string()
			.required('Please enter Email')
			.email('Please enter valid Email'),
		reg_password: yup.string().required('Please enter Password'),
		reg_confirmPassword: yup
			.string()
			.oneOf([yup.ref('reg_password')], 'Passwords must match')
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	const navigate = useNavigate()

	const onSubmit = async (data: any) => {
		try {
			await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, data)
			toast.success('Registration successful! Please log in.')
			navigate('/auth/login')
		} catch (error) {
			toast.error('Registration failed')
		}
	}

	return (
		<form className="form-horizontal auth-form" onSubmit={handleSubmit(onSubmit)}>
			<FormTextInput
				name="reg_email"
				label="Email"
				containerClass="mb-2"
				control={control}
				placeholder="Enter email"
			/>
			<FormInputPassword
				name="reg_password"
				label="Password"
				control={control}
				containerClass="mb-2"
				placeholder="Enter password"
			/>
			<FormInputPassword
				name="reg_confirmPassword"
				label="Confirm Password"
				control={control}
				containerClass="mb-2"
				placeholder="Enter confirm password"
			/>

			<Row className="form-group my-3">
				<Col sm={12}>
					<div className="custom-control custom-switch switch-success">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitchSuccess2"
						/>
						<label className="form-label text-muted" htmlFor="customSwitchSuccess2">
							You agree to the MercBot{' '}
							<Link to="#" className="text-primary">
								Terms of Use
							</Link>
						</label>
					</div>
				</Col>
			</Row>

			<Row className="form-group mb-0">
				<Col xs={12}>
					<Button
						variant="primary"
						type="submit"
						className="w-100 waves-effect waves-light"
					>
						Register <i className="fas fa-sign-in-alt ms-1"></i>
					</Button>
				</Col>
			</Row>
		</form>
	)
}

export default RegisterForm
