import mongoose, { Schema, model } from "mongoose";

export const contractSchema = new Schema({
  term: String,
  dateCreated: Date,
});

export const userSchema = new Schema({
  name: String,
  birth: String,
  ip: String,
  dateAccepted: Date,
  forWho: String,
  otherName: String,
  otherBirth: String,
  contract: String,
});
