export const typeDefs = `#graphql
  type Pet { #Pet es un tipo de dato que se puede usar en el esquema, los comentarios son con #
    id: ID! #ID es un tipo de dato que se puede usar en el esquema, ! significa que es obligatorio, si es opcional no se pone nada
    name: String!
    breed: String!
  }
  type Query { #Query son lsa funciones que yo publico para que el cliente pueda pedirme datos
    pets(breed:String): [Pet!]! #pets es una funcion que devuelve un array de Pet (del GraphQL), estas dos ! indican que siempre va a devolver un array y que va a ser un array de Pet
    pet(id: ID!): Pet! #pet es una funcion que devuelve un Pet y recibe un id de tipo ID obligatorio
  }
  type Mutation { #Mutation es un tipo de dato que se puede usar en el esquema
    addPet(name: String!, breed: String!): Pet! #addPet es una funcion que devuelve un Pet y recibe un id, un name y un breed de tipo String obligatorio
    deletePet(id: ID!): Pet! #deletePet es una funcion que devuelve un Pet y recibe un id de tipo ID obligatorio
    updatePet(id: ID!, name: String!, breed: String!): Pet! #updatePet es una funcion que devuelve un Pet y recibe un id, un name y un breed de tipo String obligatorio
  }
`;
