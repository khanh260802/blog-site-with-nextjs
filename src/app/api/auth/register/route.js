import User from '@/models/User'; 
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import connect from '@/utils/db';

export const POST = async (request) => { 
    const {username, email, password} = await request.json();
    await connect();
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({name:username, email, password: hashedPassword}); 
    try {
        await user.save();
        return new NextResponse("User created", {status: 201});
    } catch (error) {
        console.log(error); 
        return new NextResponse(error.message, {status: 500});
    }
}


