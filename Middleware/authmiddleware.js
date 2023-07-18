import { Admin } from "mongodb";
import Users from "../Modal/userModal.js"

export const middleware = async (req,res,next) =>
{
    try{
        
        const{email,password,pin,role} = req.body
        if(!email) return res.send("Email is Required");
        if(!password) return res.send("password is Required");
        if(!pin) return res.send("pin is Required")
        if(!role) return res.send("Role is required")

        const response = await Users.find({email}).exec()
        var secretkey ='apple'
        var decipher = encrypt.decrypt(response[0].password,secretkey,256);

        if(decipher == password)
        {
            if(response[0].role == Seller || response[0].role == Admin)
            {
                return res.send("allowed to ADD product")
            }
            next();
            
        }
        else{
            return res.send("Incoorect passsword")
        }
    }
    catch(err)
    {
        return res.send(err)
    }
}