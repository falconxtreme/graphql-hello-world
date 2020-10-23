import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use("*", cors());
app.use(compression());

// const typeDefs = `
//     type Query {
//       hola: String!
//       holaConNombre(nombre: String!): String!
//       holaAlCursoGraphQL: String!
//     }
// `;

// const resolvers: IResolvers = {
//   Query: {
//     hola(): string {
//       return "Hola Mundo!";
//     },
//     holaConNombre(__: void, { nombre }): string {
//       return `Hola Mundo ${nombre}`;
//     },
//     holaAlCursoGraphQL(): string {
//       return "Hola Mundo en el curso de GraphQL!";
//     },
//   },
// };

// const schema: GraphQLSchema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// app.use("/", (re, res) => {
//   res.send("Bienvenido al curso de GRAPHQL!!!");
// });
app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = 5300;

app.listen({ port: PORT }, () =>
  console.log(`Hola mundo API GraphQL http://localhost:${PORT}/graphql`)
);
