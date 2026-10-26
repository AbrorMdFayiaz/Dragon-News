import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4'])
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})


export const { signIn, signUp, useSession } = createAuthClient()