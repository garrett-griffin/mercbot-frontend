import axios from 'axios';
import { useAccountContext, useAuthContext } from '@/context';


const AxiosInstance = () => {
    const { account, hasAccount } = useAccountContext();
    const { user, isAuthenticated } = useAuthContext();

    const token = isAuthenticated && typeof user !== "boolean" ? user.token : null;
    const siteId = hasAccount && typeof account !== "boolean" ? account.site.id : null;
    const seasonId = 1;
    const accountId = hasAccount && typeof account !== "boolean" ? account.id : null;
    const userId = isAuthenticated && typeof user !== "boolean" ? user.id : null;

// noinspection UnnecessaryLocalVariableJS
    const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
    data: {
        siteId,
        seasonId,
        accountId,
        userId
    },
});

    return axiosInstance;
};

export default AxiosInstance;