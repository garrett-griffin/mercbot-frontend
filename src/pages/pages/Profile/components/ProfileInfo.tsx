import { Card, CardBody, Col, Row } from 'react-bootstrap'
// import user4 from '@/assets/images/users/user-4.jpg'
// import { Link } from 'react-router-dom'
// import { MapContainer, Marker, Popup } from 'react-leaflet'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import type { LatLngExpression } from 'leaflet'
import { useAuthContext } from '@/context/useAuthContext';

const ProfileInfo = () => {
	const { user } = useAuthContext();

	return (
		<Row>
			<Col xs={12}>
				<Card>
					<CardBody>
						<div className="dastone-profile">
							<Row>
								<Col lg={4} className="align-self-center mb-3 mb-lg-0">
									<ul className="list-unstyled personal-detail mb-0">
										<li className="mt-2">
											<i className="ti ti-email text-secondary font-16 align-middle me-2"></i>{' '}
											<b> Email </b> : {typeof user !== "boolean" ? user.username : ""}
										</li>
									</ul>
								</Col>

								<Col lg={4} className="ms-auto align-self-center">
								</Col>
							</Row>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default ProfileInfo
