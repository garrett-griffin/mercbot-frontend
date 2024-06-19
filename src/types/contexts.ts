export type Account = {
    id: number
    apiUser: string
    apiToken: string
    seasonId: number
    userId: number
}

export type Site = {
    id: number
    url: string
    name: string
}

export type AccountContextType = {
    account: Account | boolean
    hasAccount: boolean
    saveSession: (session: Account) => void
    removeSession: () => void
}
