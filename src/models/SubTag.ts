import { Document, Model, model, Schema } from "mongoose";
import { ITakaTag } from "./Tag";

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param rag:ref => ITakaTag._id
 * @param titulo:string
 * @param descricao:string
 */
export interface ITakaSubTag extends Document {
  tag: ITakaTag["_id"];
  titulo: string;
  descricao: string;
  preco: string;
  open: boolean;
}

export const takaSubTagSchema: Schema = new Schema({
  tag: {
    type: Schema.Types.ObjectId,
    ref: "TakaTag",
  },
  titulo: {
    type: String,
    required: true,
  },
  preco: {
    type: String,
  },
  descricao: {
    type: String,
  },
  open: {
    type: Boolean,
    default: true,
  },
});
