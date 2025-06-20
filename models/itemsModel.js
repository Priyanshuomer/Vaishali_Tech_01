import {Schema,model} from "mongoose";


const itemsSchema = new Schema ({
    title:{        // title => Acer aspire lite 
        type: String,
         required: true
    } ,

    description:{         // about item may or may not
        type: String,
        required: true
    } ,

    imagePath :{           // image of product, store path
        type: String ,
        // required: true
    } ,

    category :{  // which category like laptops , mobile , etc...
        type:Schema.Types.ObjectId ,
        ref:"Category",
        required:true
    } ,

    blog :{
        type: Schema.Types.ObjectId ,
    }

} , {timestamps:true});    // store all required timestamps 


const itemsModel = model("Items",itemsSchema);

export default itemsModel;
