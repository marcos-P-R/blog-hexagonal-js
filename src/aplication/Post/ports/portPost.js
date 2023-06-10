import post from "../../../infrastructure/mongoDb/model/Post.js";

async function createPostDb(postBody) {
  try {
    const result = await post.create(postBody);
    return result;
  } catch (error) {
    return error;
  }
}

export default createPostDb;