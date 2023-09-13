import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User, { userType } from "@/models/User";
import bcrypt from "bcryptjs";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials: userType) {
        const currentUser: userType | null = await User.findOne({
          email: credentials.email,
        });

        const isPasswordCorrect =
          currentUser &&
          (await bcrypt.compare(credentials.password, currentUser.password));
        console.log(isPasswordCorrect);

        if(!isPasswordCorrect){
          throw new Error("Credentials Invalid")
        }
            
        return currentUser;
      },
    }),
  ],
});
export { handler as GET, handler as POST };
