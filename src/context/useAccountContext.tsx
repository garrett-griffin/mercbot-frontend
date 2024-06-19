import { AccountContextType, Account } from '@/types'
import {deleteCookie, getCookie, hasCookie, setCookie} from 'cookies-next'
import {createContext, useContext, useState, ReactNode, useEffect} from 'react'

const AccountContext = createContext<AccountContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export function useAccountContext() {
    const context = useContext(AccountContext)
    if (context === undefined) {
        throw new Error('useAccountContext must be used within an AccountProvider')
    }
    return context
}

const accountSessionKey = '_MERCBOT_CURRENT_ACCOUNT'

export function AccountProvider({ children }: { children: ReactNode }) {
    const [account, setAccount] = useState<Account | boolean>(false as boolean)



    const saveSession = (account: Account) => {
        setCookie(accountSessionKey, JSON.stringify(account))
        setAccount(account)
    }

    const removeSession = () => {
        deleteCookie(accountSessionKey)
        setAccount(false)
    }

    const loadSession = () => {
        const storedAccount = hasCookie(accountSessionKey) && JSON.parse(getCookie(accountSessionKey) as string)
        if (storedAccount) {
            setAccount(storedAccount)
        }
    }

    // Call loadSession when the component mounts
    useEffect(() => {
        loadSession()
    }, [])

    return (
        <AccountContext.Provider
            value={{
                account,
                hasAccount: hasCookie(accountSessionKey),
                saveSession,
                removeSession,
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}
