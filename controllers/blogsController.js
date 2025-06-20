import itemsModel from "../models/itemsModel.js";
import blogsModel from "../models/blogsModel.js";
import mongoose from "mongoose";

//   api="/api/blogs/view/all"

export const allBlogs = async (req,res) => {
     try{
        const blogs = await blogsModel.find({});
     return res.status(201).json({
      success: true,
      blogs,
    });
     }
     catch(err) {
        console.log("Error in displaing all blogs");
      return res.status(201).json({
      success: false,
       message: "Error in displaing all blogs"
    });
     }
}

//      api = "/api/blogs/view/blog/:blogId"
export const showBlog = async (req,res) => {
     const blogId = req.params.blogId;
     try{
        const blog = await blogsModel.findById(blogId);
          return res.status(201).json({
            success: true,
            blog,
            });
     }
     catch(err) {
          console.log("Error in loading blog ..");
            return res.status(500).json({
            success: false,
            message: "Please refresh the page......",
            });
     }
}



//      api = "/api/blogs/view/items/:blogId"
export const showItemsOfBlog = async (req,res) => {
    try{
     const blogId = req.params.blogId;
      const items = await itemsModel.find({ blog: new mongoose.Types.ObjectId(blogId) }).populate('blog');

      return res.status(201).json({
      success: true,
      items,
    });
    }
    catch(err)
    {
      console.log(err);
        console.log("Error in displaying products of blog");

    return res.status(500).json({
      success: false,
      message: "Something went wrong , please try later....",
    });
    }
}

//      api = "/api/blogs/create-blog"
export const createBlog = async (req,res) => {
     const {title,description} = req.body;

         if(!title || title === "")
        {
           console.log("Title field is required to create new blog");
           return res.status(400).json({
             success: false,
             message: "Title is required"
           });
        }

    try{
          const newBlog = await blogsModel.create({
             title:title,
             description:description
          });
          return res.json({newBlog});
    }
     catch(err){
        console.log("error in creating a blog");
       return res.status(201).json({
            success: false,
            message: "Error in creating....",
            });
     }
}
 

export const deleteBlogFromId = async(req,res) => {
   try{
          const blogId = req.params.blogId;
      if (!mongoose.Types.ObjectId.isValid(blogId))
     {
      return res.status(400).json({ success: false, message: 'Invalid blog ID' });
    }

    const blog = await blogsModel.findByIdAndDelete(blogId);

    if (!blog) {
      return res.status(500).json({ success: false, message: 'Blog not found' });
    }

    return req.status(200).json({
       success: true,
       message: "Blog deleted successfully..."
    });
   }
   catch(err){
     return res.status(500).json({
        success: false,
        message: "Server error"
     });
   }
}