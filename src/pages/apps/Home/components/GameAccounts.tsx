import { useState, useEffect } from 'react';
import AxiosInstance from '@/common/api/client';
import { Account } from '@/types'
import {Link} from "react-router-dom";
import { toast } from 'sonner'

const GameAccounts = () => {
    const axiosInstance = AxiosInstance();
    const axiosDeleteInstance = AxiosInstance();
    const [gameAccounts, setGameAccounts] = useState<Account[]>([]);

    useEffect(() => {
        axiosInstance.get('/gameAccount/get')
            .then(response => {
                setGameAccounts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [axiosInstance]);

    const handleDeleteGameAccount = (id: number) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this game account?');
        if (confirmDelete) {
            axiosDeleteInstance.delete(`/gameAccount/${id}`)
                .then(response => {
                    if (response.status === 204) {
                        toast.success('Game account deleted successfully');
                    } else {
                        toast.error('Failed to delete game account');
                    }
                })
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .catch(() => {
                    toast.error('Error deleting game account.');
                });
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped mb-0">
                <thead>
                <tr>
                    <th>API Username</th>
                    <th>API Token</th>
                </tr>
                </thead>
                <tbody>
                {gameAccounts.map(gameAccount => (
                    <tr key={gameAccount.id}>
                        <td>{gameAccount.apiUser}</td>
                        <td>{String(gameAccount.apiToken).substring(0, 5)}...</td>
                        <td className="text-end">
                            <Link to="#" onClick={() => handleDeleteGameAccount(gameAccount.id)}>
                                <i className="las la-trash-alt text-secondary font-16"/>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default GameAccounts;