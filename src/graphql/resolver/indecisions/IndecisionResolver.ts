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
  const indecisions = knex('indecisions');
  if(await indecisions.where('title', '=', data.title).first() === undefined){
    await knex('indecisions').insert({title: data.title});
    return true;

  }else{
    return false;
  }
}

const removeIndecision = async(_: any, { id }: any, ctx: ContextType) => {
  const knex = ctx.knex;
  await knex('indecisions').where('id', "=", id).del();
  return true;
}

export const IndecisionResolver = {
  Query: {
    indecisionList
  },
  Mutation: {
    createIndecision,
    removeIndecision
  }
}