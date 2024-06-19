import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '@/context/useAuthContext'

type PrivateRouteProps = {
	component: React.ComponentType
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent }) => {
	const { isAuthenticated } = useAuthContext()

	if (!isAuthenticated) {
		return <Navigate to="/auth/login" />
	}

	return <RouteComponent />
}

export default PrivateRoute
