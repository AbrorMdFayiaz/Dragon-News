import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4'])
// import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "../../../../../lib/auth";

export const { POST, GET } = toNextJsHandler(auth);