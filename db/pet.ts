import mongoose from "mongoose";
import { Pet } from "../types.ts";

const Schema = mongoose.Schema;

const petSchema = new Schema (
    {
        name: {type: String, required:true},
        breed: {type: String , required:true}
    }
);

export type PetModelType = mongoose.Document & Omit<Pet, "id">;

export const PetModel = mongoose.model<PetModelType>("Pet", petSchema);