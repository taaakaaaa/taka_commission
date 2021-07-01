import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param titulo:string
 */
export interface ITakaTag extends Document {
  titulo: string;
}

export const takaTagSchema: Schema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
});
