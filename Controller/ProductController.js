import Products from "../Modal/ProductModal.js"


export const addproduct = async (req,res) =>
{
    try{

        const{name,price,category,description,image} = req.body
        if(!name) return res.send("Name is required");
        if(!price) return res.send("price is required");
        if(!category) return res.send("category is required");
        if(!description) return res.send("description is required");
        if(!image) return res.send("image is required");

        const product = new Products
        ({
            name,
            price,
            category,
            description,
            image
        })
        
        await product.save();
        return res.send("Product Added Successfully")
    }
    catch(err)
    {
        return res.send(err)
    }
}


export const getallproduct = async (req,res) =>
{
    try{
        const response = await Products.find().exec()

        if(response)
        {
            return res.send(response)
        }
        else
        {
            return res.send("Product Not Found")
        }
    }
    catch(err)
    {
        return res.send(err)
    }
}


export const deleteProduct = async (req,res) =>
{
    try{
        const{id} = req.body
        if(!id) return res.send("Id is required")
        const response = await Products.findByIdAndDelete({id:id}).exec();
        if(response)
        {
            return res.send(response);
        }
        else
        {
            return res.send("Product Not Deleted")
        }
    }
    catch(err)
    {
        return res.send(err)
    }
}