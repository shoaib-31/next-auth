import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                emaill: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials: any) {
                console.log(credentials);

                return {
                    id: "1",
                    name: "John Doe",
                    email: "hello"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;