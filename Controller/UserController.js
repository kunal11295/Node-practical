import encrypt from "encryptjs"
import Users from "../Modal/userModal.js"



export const Registration = async (req,res) =>
{
    try{
        const{name,email,password,role,pin,number} = req.body
        if(!name) return res.send("Name is Required");
        if(!email) return res.send("email is Required");
        if(!password) return res.send("password is Required");
        if(!role) return res.send("role is Required");
        if(!pin) return res.send("pin is Required");
        if(!number) return res.send("number is Required");

        var secretkey ="apple"
        var plaintext = password
        var plaintextforpin = pin
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256)
        var ciphertextforpin = encrypt.encrypt(plaintextforpin,secretkey,256)

        const response = await Users.find({email:email}).exec();
        console.log(response,"response");  

        const user = new Users
        ({
            name:name,
            email:email,
            password:ciphertext,
            role:role,
            pin:ciphertextforpin,
            number:number
        })
        await user.save();
        return res.send("Registration Successfull");
    }
    catch(err)
    {
        return res.send(err)
    }
}


export const Login = async (req,res) =>
{
    try{ 
        
        const{email,password} = req.body
        if(!email) return res.send("Email is Required")
        if(!password) return res.send("Password is Required")

        const response = await Users.find({email}).exec(); 

        var secretkey = 'apple';
        var decipher = encrypt.decrypt(response[0].password,secretkey,256)
        console.log(decipher)

        if(decipher == password)
        {
            return res.send("login is sucessful");
        }
        else{
            return res.send("password is incorrect")
        }
    }
    catch(err)
    {
        return res.send(err)
    }
}