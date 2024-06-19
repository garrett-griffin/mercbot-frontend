import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import AppMenu from './Menu'
import { getMenuItems } from '@/common'

// import logoDark from '@/assets/images/logo-dark.png'
// import logoSM from '@/assets/images/logo-sm.png'
// import logoImg from '@/assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const LeftSidebar = () => {
	return (
		<div className="left-sidenav">
			<div className="brand">
				<Link to="/" className="logo">
					<div className="d-flex gap-1 justify-content-center">
						<span>
							<FontAwesomeIcon icon={faRobot} style={{color: "#FFFFFF",}} />
						</span>
						MercBot.io
					</div>
				</Link>
			</div>

			<SimpleBar className="menu-content h-100">
				<AppMenu menuItems={getMenuItems()} />
			</SimpleBar>
		</div>
	)
}

export default LeftSidebar
