import {FiMenu, FiPower} from 'react-icons/fi'
import { Button, NavLink } from 'react-bootstrap'
import { useThemeContext, useAuthContext } from '@/context'
// import { Notifications, ProfileDropdown } from './components'
import { ProfileDropdown } from './components'
// import { notifications } from './data'

const TopNavbar = () => {
	const { settings, updateSideNavMode } = useThemeContext()
	const { isAuthenticated } = useAuthContext()

	const handleLeftMenuCallBack = () => {
		if (settings.sideNavMode == 'default') {
			updateSideNavMode('sm')
		} else {
			updateSideNavMode('default')
		}
	}

	return (
		<>
			<div className="topbar">
				<nav className="navbar-custom">
					<ul className="list-unstyled topbar-nav float-end mb-0">
						{isAuthenticated ? (
							<ProfileDropdown />
						) : (
							<li>
								<NavLink href="/auth/login">
									<Button variant="soft-primary" size="sm" role="button">
										<FiPower className="align-self-center icon-xs icon-dual me-1" />{' '} Login
									</Button>
								</NavLink>
							</li>
						)}
					</ul>
					<ul className="list-unstyled topbar-nav mb-0">
						<li>
							<button
								className="nav-link button-menu-mobile"
								onClick={handleLeftMenuCallBack}
							>
								<FiMenu className="align-self-center topbar-icon" />
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default TopNavbar
