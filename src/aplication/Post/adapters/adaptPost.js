function createAdapter(dadosPost) {
  const { ...createPost } = dadosPost || new Error('Dados inválidos');
  return createPost;
}

export default createAdapter;