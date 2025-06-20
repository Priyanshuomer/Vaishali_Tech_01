import itemsModel from "../models/itemsModel.js";
import blogsModel from "../models/blogsModel.js";

// create an item <"/api/items/create-item">
export const createItem = async(req,res) => {
     const {title,description,category,blog} = req.body;
     if(!title || !description || !category)
     {
          return res.status(400).json({
               success: false,
               message: "Required Fields are empty"
          });
     }

      try{
            const createdProduct = await itemsModel.create(
         {
          title: title,
          description: description,
          category: category,
          blog: blog
         }
     );

          return res.status(200).json({
               success: true,
               createdProduct
          });
      }
      catch(err)
      {
          console.log("Problem in creating product");
          console.log(err);
          return res.status(400).json({
          success: false,
          message: "Problem in creating product...."
          });
      }
}


//   < /api/items/add-blog/:itemId/:blogId >
export const addBlogToProduct = async (req,res) => {
    try{
      const blogId = req.params.blogId;
     const itemId = req.params.itemId;

     const Product = await itemsModel.findById(itemId).populate("blog");

     if(!Product)
     {
          return res.status(500).json({
               success: false,
               message: "Product not exists"
          });      
     }

     const providedBlog = await blogsModel.findById(blogId);

     if(!providedBlog)
     {
          return res.status(500).json({
               success: false,
               message: "Blog not exists"
          });
     }

     if(Product.blog === blogId)
     {
           return res.status(500).json({
               success: false,
               message: "Product already have same blogId.."
          });
     }

     Product.blog = providedBlog._id;
     await Product.save();

     return res.status(200).json({
     success: true,
     message: "Product's Blog Updated Successfully"
     });
    }
    catch(err)
    {
     console.log(err);
     return res.status(400).json({
     success: false,
     message: "Product's Category Updation Failed......"
     });
    }
}