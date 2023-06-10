import Fastify from "fastify";
import createAdapter from "../../../aplication/Post/adapters/adaptPost.js";
import createPostDb from "../../../aplication/Post/ports/portPost.js";

const appFastify = Fastify({ logger: true });

appFastify.post("/createPost", async(request, reply) => {
  try{
    const { ...post } = createAdapter(request.body);
    const result = await createPostDb(post);
    return reply.status(201).send(result);
  } catch (error) {
    return reply.status(500).send(error);
  }
});

export default appFastify;