import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    console.log(req.body);
    //console.log("MongoDB Connection String:", process.env.MONGODB_URI)
    const hashedPassword = bcryptjs.hashSync(password, 10); 
    const newUser = new User({ username, email, password: hashedPassword });

    try{
     await newUser.save();
    //db.collectionName.remove({ email: null });
    //console.log('User saved successfully:', savedUser);
    res.status(201).json({ message: "User Created Successfully" });
    } catch(error){
     res.status(500).json(error.message);
    }
    
};
