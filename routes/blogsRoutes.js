// import blogsModel from "../models/blogsModel.js";
import {showItemsOfBlog, showBlog, createBlog, allBlogs, deleteBlogFromId} from "../controllers/blogsController.js";

import {Router} from "express"; 

const route = Router();

route.get("/view/blog/:blogId",showBlog);
route.get("/view/all",allBlogs);

route.get("/view/items/:blogId",showItemsOfBlog);  // view all products of a blog 

route.post("/create-blog",createBlog);  // to create a blog 

route.delete("/delete-blog/:blogId",deleteBlogFromId);


 export default route;