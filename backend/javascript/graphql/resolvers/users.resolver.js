/* eslint-disable no-console */
import User from '../../models/users.model'
import { requireAuth } from '../../services/auth'

export default {
    signupUser: async (_, { fullName, ... rest }) => {
        try{
            const [firstname, ... lastname] = fullName.split(' ');
            const user = await User.create({firstname, lastname, ... rest });
    
            return { token: user.createToken(), }
        }catch(error){
            throw error
        }
    },
    loginUser: async(_, {email, password}) => {
        try{
            const user = await User.findOne({ email });

            if(!user){
                throw new Error(`Email ${email} is incorrect, maybe you want to sign up`)
            }if(!user.authenticateUser(password)){
                throw new Error(`Sorry, password not match. Try again`)
            }

            return { token: user.createToken(), };
        }catch(error){
            throw error
        }
    },
    me: async (_, args, {user}) =>{
        try{
            const me = await requireAuth(user)
            return me;
            
        }catch(error){
            throw error;
        }
    }
}