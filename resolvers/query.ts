import { Pet } from "../types.ts";
import { PetModel } from "../db/pet.ts";
import { getPetFromModel } from "../controllers/getPetFromModel.ts";
import { GraphQLError } from "graphql";

export const Query = {
    pets: async (_parent:unknown, args: {breed?: string}):Promise<Pet[]> => {
        try{
            if(args.breed){
                const pets = await PetModel.find({breed: args.breed});
                const petResponse: Pet[] = await Promise.all(pets.map(async (pet) => await getPetFromModel(pet)));
                return petResponse;
            }
            const pets = await PetModel.find();
            const petResponse: Pet[] = await Promise.all(pets.map(async (pet) => await getPetFromModel(pet)));
            return petResponse;
        }catch(error){
            throw new GraphQLError(error.message, {
                extensions: {code: "INTERNAL_SERVER_ERROR"},
            });
        }
    },
    pet: async(_parent:unknown, args: {id: string}): Promise<Pet> => {
        try{
            const pet = await PetModel.findById(args.id);
            if(!pet){
                throw new GraphQLError(`No se encontro ninguna mascota con el id ${args.id}`, {
                    extensions: {code: "NOT_FOUND"},
                });
            }
            const petResponse:Pet = await getPetFromModel(pet);
            return petResponse;
        }catch(error){
            throw new GraphQLError(error.message, {
                extensions: {code: "INTERNAL_SERVER_ERROR"},
            });
        }
    }
}