import mongoose, { Schema, model } from "mongoose";

export const contractSchema = new Schema({
  term: String,
  termEn: String,
  dateCreated: Date,
});

export const userSchema = new Schema({
  nickname: String,
  name: String,
  birth: String,
  ip: String,
  dateAccepted: Date,
  forWho: String,
  otherName: String,
  otherBirth: String,
  contract: String,
});
