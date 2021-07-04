import mongoose, { Model, model } from "mongoose";
import { contractSchema, userSchema } from "../contract/contract";
import { ITakaArt, takaArtSchema } from "./Art";
import { ITakaSubTag, takaSubTagSchema } from "./SubTag";
import { ITakaTag, takaTagSchema } from "./Tag";

//@ts-ignore
mongoose.models = {};

export const Contract = model("Contract", contractSchema);
export const User = model("User", userSchema);
export const TakaArt: Model<ITakaArt> = model("TakaArt", takaArtSchema);
export const TakaSubTag: Model<ITakaSubTag> = model(
  "TakaSubTag",
  takaSubTagSchema
);
export const TakaTag: Model<ITakaTag> = model("TakaTag", takaTagSchema);

export type { ITakaTag, ITakaSubTag, ITakaArt };
