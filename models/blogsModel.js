import {Schema,model} from "mongoose";


const blogsSchema = new Schema ({
    title:{        // title => top 5 laptops under $50,000
        type: String,
         required: true
    } ,

    description:{         // about blog may or may not
        type: String
    } ,

    imagePath :{           // cover image of blog , store path
        type: String 
    } ,

    category :{  // which category like laptops , mobile , etc...
        type:Schema.Types.ObjectId ,
        ref:"Category",
        // required:true
    }

} , {timestamps:true});    // store all required timestamps 


const blogsModel = model("Blogs",blogsSchema);

export default blogsModel;