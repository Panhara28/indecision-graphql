import { ContextType } from "../../../lib/ContextType"

const indecisionList = async(_: any, {limit, offset}: any, ctx: ContextType) => {
  const knex = ctx.knex;
  const indecisions = await knex('indecisions').limit(limit).offset(offset).orderBy('id', 'desc');
  return indecisions.map(x  => {
    return{
      ...x,
      title: x.title
    }
  })
}

const createIndecision = async(_:any, { data }: any, ctx: ContextType) => {
  const knex = ctx.knex;
  await knex('indecisions').insert({title: data.title});
  return true;
}

export const IndecisionResolver = {
  Query: {
    indecisionList
  },
  Mutation: {
    createIndecision
  }
}