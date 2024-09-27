import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { emit } from "process";

const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  // session: { strategy: "jwt" },
  // pages: { signin: "/auth/signin" }, // redirect to my own component
  providers: [
    Credentials({
      credentials: {
        email: { lablel: "Email", type: "text", placeholder: "email" },
        password: {
          lablel: "Password",
          type: "password",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        // database

        const user = {
          name: "Moiein",
          emial: "moein@gmail.com",
          image: "",
        };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token to the token right after signin
      console.log("Moein jwt");
      console.log(token.access_token);
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("Moein");
      console.log(token.accessToken);
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
