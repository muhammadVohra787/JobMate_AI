export type GoogleUserInfo = {
    email: string,
    family_name: string,
    given_name: string,
    id: string,
    name: string,
    picture: string,
    verified_email: boolean
}

export type AuthToken = { token?: string; error?: string }