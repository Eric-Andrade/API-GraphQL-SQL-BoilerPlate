import jwt from 'jsonwebtoken'
import constants from '../config/constants';
import User from '../models/users.model'

export async function requireAuth(user){
    if(!user || !user._id){
        throw new Error('Unathorized');
    }
    const me = await User.findById(user._id);

    if(!me){
        throw new Error('Unathorized'); 
    }
    return me;
}

export function decodeToken(token){
    const arr = token.split(' ');
    if(arr[0] === 'Bearer'){
        return jwt.verify(arr[1], constants.jwt_secret)
    }
    throw new Error(`Token not valid`)
} 