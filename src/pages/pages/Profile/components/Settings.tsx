import {
	Row,
	Col,
	Card,
	Button,
	CardHeader,
	CardTitle,
	CardBody
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FormInputPassword, FormTextInput } from '@/components'
import { toast } from 'sonner'
import { useAuthContext } from '@/context/useAuthContext.tsx'
import AxiosInstance from '@/common/api/client';

const Settings = () => {
	const { control, handleSubmit } = useForm()
	const { user } = useAuthContext()

	const onSubmitUsername = async (data: any) => {
		try {
			const { email } = data;

			const axiosInstance = AxiosInstance();

			await axiosInstance.post(`/auth/updateUsername`, { newUsername: email }); // Send the new username to the backend
			toast.success('Username updated successfully!')
		} catch (error) {
			toast.error('Username update failed')
		}
	}

	const onSubmitPassword = async (data: any) => {
		try {

			const axiosInstance = AxiosInstance();

			const {current_password, new_password, confirm_password } = data; // Get the new username from the form data
			if(current_password === "") {
				toast.error('Must provide current password.')
				return;
			}
			if(new_password === "") {
				toast.error('Must provide new password.')
				return;
			}
			if(confirm_password === "") {
				toast.error('Must confirm new password.')
				return;
			}
			if(new_password !== confirm_password) {
				toast.error('New Passwords must match.')
				return;
			}
			await axiosInstance.post(`/auth/updatePassword`, {currentPassword: current_password, newPassword: new_password})
			toast.success('Password updated successfully!')
		} catch (error) {
			toast.error('Password update failed')
		}
	}
	return (
		<Row>
			<Col lg={6} xl={6}>
				<Card>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<CardTitle>Personal Information</CardTitle>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Email Address
							</label>
							<Col lg={9} xl={8}>
							{(typeof user !== 'boolean' && user !== null) ? (
								<FormTextInput
									name="email"
									label=" "
									containerClass="mb-2"
									control={control}
									placeholder="Enter email"
									value={String(user.username).toLowerCase()} // Set the default value to the user's email address
								/>
								) : (

								<FormTextInput
									name="email"
									label=" "
									containerClass="mb-2"
									control={control}
									placeholder="Enter email"
								/>
								)}
							</Col>
						</Row>
						<div className="form-group">
							<Col lg={9} xl={8} className="offset-lg-3">
								<Button size="sm" variant="outline-primary" type="submit" onClick={handleSubmit(onSubmitUsername)}>
									Submit
								</Button>
							</Col>
						</div>
					</CardBody>
				</Card>
			</Col>
			<Col lg={6} xl={6}>
				<Card>
					<CardHeader>
						<h4 className="card-title">Change Password</h4>
					</CardHeader>
					<CardBody>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Current Password
							</label>
							<Col lg={9} xl={8}>
								<FormInputPassword
									name="current_password"
									label=""
									control={control}
									containerClass="mb-2"
									placeholder="Enter current password"
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								New Password
							</label>
							<Col lg={9} xl={8}>
								<FormInputPassword
									name="new_password"
									label=""
									control={control}
									containerClass="mb-2"
									placeholder="New password"
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Confirm Password
							</label>
							<Col lg={9} xl={8}>
								<FormInputPassword
									name="confirm_password"
									label=""
									control={control}
									containerClass="mb-2"
									placeholder="Confirm password"
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<Col lg={9} xl={8} className="offset-lg-3">
								<Button type="submit" size="sm" variant="outline-primary" onClick={handleSubmit(onSubmitPassword)}>
									Change Password
								</Button>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default Settings
