import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt'
const handle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials', 
      async authorize(credentials) { 
        await connect(); 
        try {
          const user = await User.findOne({email: credentials.email}); 
          if(user) { 
            console.log(user)
            const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
            if(isCorrectPassword)
              return user
            else 
              throw new Error('Wrong password!')
          } else {
            throw new Error('User not found!')
          }
        } catch (error) {
          throw new Error(error)      
        }
      }
    }), 
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  pages: {
    error: '/dashboard/login'
  }
})
export {handle as GET, handle as POST}; 