import { SchemeLoader } from "./SchemaLoader";
import { RoleResolver } from "./resolver/RoleResolver";
import { UserResolver } from "./resolver/user";
import { IndecisionResolver } from "./resolver/indecisions/IndecisionResolver";

export const typeDefs = SchemeLoader();

export const resolvers = [
  RoleResolver,
  UserResolver,
  IndecisionResolver
]