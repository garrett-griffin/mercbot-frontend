import {
	Button,
	Card,
	CardBody,
	Col,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabPane,
	TabContent, CardHeader, CardTitle
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { ProjectData } from '../data'
import Settings from './Settings'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { FormTextInput } from '@/components'
import { useAuthContext } from '@/context/useAuthContext.tsx'
import AxiosInstance from '@/common/api/client';
import GameAccounts from "@/pages/apps/Home/components/GameAccounts.tsx"; // Import the axiosInstance

const ProfileTask = () => {
	const { control, handleSubmit } = useForm()
	const { user } = useAuthContext()

	const axiosInstance = AxiosInstance();

	const onSubmitGameAccount = async (data: any) => {
		const { apiUsername, apiToken } = data;

		try {
			if (typeof user !== "boolean") {
				const response = await axiosInstance.post(
					`/gameAccount/create`,
					{apiUser: apiUsername, apiToken},
				);

				if (response.status === 201) {
					toast.success('Game account created successfully');
				} else {
					toast.error('Failed to create game account:');
				}
			}
		} catch (error) {
			toast.error('Error creating game account:');
		}
	}


	return (
		<TabContainer defaultActiveKey="1">
			<div className="pb-4">
				<Nav
					className="nav-border nav-pills mb-0"
					id="pills-tab"
					role="tablist"
				>
					<NavItem>
						<NavLink eventKey="1">Mercatorio Accounts </NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="4">Settings</NavLink>
					</NavItem>
				</Nav>
			</div>

			<Row>
				<Col xs={12}>
					<TabContent className="chat-list" id="pills-tabContent">
						<TabPane eventKey="1" className="fade">
							<Row>
								<Col lg={6} xl={6}>
									<Card>
										<CardHeader>
											<Row className="align-items-center">
												<Col>
													<CardTitle>Existing Accounts</CardTitle>
												</Col>
											</Row>
										</CardHeader>
										<CardBody>
											<GameAccounts />
										</CardBody>
									</Card>
								</Col>
								<Col lg={6} xl={6}>
									<Card>
										<CardHeader>
											<Row className="align-items-center">
												<Col>
													<CardTitle>Add Account</CardTitle>
												</Col>
											</Row>
										</CardHeader>
										<CardBody>
											<FormTextInput
												name="apiUsername"
												label="Mercatorio Account Email Address"
												containerClass="mb-2"
												control={control}
												placeholder="Mercatorio Account Email Address"
											/>
											<FormTextInput
												name="apiToken"
												label="API Token"
												containerClass="mb-2"
												control={control}
												placeholder="API Token"
											/>
											<Button size="sm" variant="outline-primary" type="submit" onClick={handleSubmit(onSubmitGameAccount)}>
												Add Account
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</TabPane>
						<TabPane eventKey="4" className="fade">
							<Settings />
						</TabPane>
					</TabContent>
				</Col>
			</Row>
		</TabContainer>
	)
}

export default ProfileTask
