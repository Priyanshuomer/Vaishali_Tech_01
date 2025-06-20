import {createItem, addBlogToProduct} from "../controllers/itemsControllers.js";
import {Router} from "express";


const route = Router();

route.post("/create-item",createItem);
route.put("/add-blog/:itemId/:blogId",addBlogToProduct);


export default route;
