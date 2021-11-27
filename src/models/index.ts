import mongoose, { Model, model } from "mongoose";
import { contractSchema, userSchema } from "../contract/contract";
import { ITakaArt, takaArtSchema } from "./Art";
import { ITakaSubTag, takaSubTagSchema } from "./SubTag";
import { ITakaTag, takaTagSchema } from "./Tag";

//@ts-ignore
mongoose.models = {};

export const Contract = model("Contract", contractSchema);
export const User = model("User", userSchema);
export const TakaArt = model<ITakaArt>("TakaArt", takaArtSchema);
export const TakaSubTag = model<ITakaSubTag>("TakaSubTag", takaSubTagSchema);
export const TakaTag = model<ITakaTag>("TakaTag", takaTagSchema);

export type { ITakaTag, ITakaSubTag, ITakaArt };
