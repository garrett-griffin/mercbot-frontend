import { Col, Row } from 'react-bootstrap'
import { PageMetaData } from './index'
import { Link } from 'react-router-dom'

interface PageTitleProps {
	appName: string
	title: string
}

const PageBreadcrumb2 = ({ title, appName }: PageTitleProps) => {
	return (
		<>
			<PageMetaData title={title} />
			<Row className="row">
				<Col sm={12}>
					<div className="page-title-box">
						<Row>
							<Col>
								<h4 className="page-title">{title}</h4>
								{appName !== 'Home' && title !== 'Home' ? (
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<Link to="/">MercBot</Link>
											</li>
											<li className="breadcrumb-item">
												<Link to="#">{appName}</Link>
											</li>
											<li className="breadcrumb-item active">{title}</li>
										</ol>) :

									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<Link to="/">MercBot</Link>
										</li>
									</ol>
								}
							</Col>
							<div className="col-auto align-self-center d-flex gap-1">
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default PageBreadcrumb2
