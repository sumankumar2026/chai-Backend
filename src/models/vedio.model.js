import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = new Schema(
    {
        vedioFile:{
            type:String,
            require:true
        },
        tittle:{
            type:String,
            require:true
        },
        thumbNail:{
            type:String,
            require:true
        },
        decription:{
            type:String,
            require:true
        },
        duration:{
            type:Number,
            
        },
        view:{
            type:Number,
            default:0,
        },
        isPublish:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

},
{timestamps:true})

vedioSchema.plugin(mongooseAggregatePaginate)


export const Vedio = mongoose.model('Vedio',vedioSchema)