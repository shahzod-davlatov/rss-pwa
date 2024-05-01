export default defineEventHandler(async (event) => {
  const feed = getRouterParam(event, 'feed');

  if (!feed) {
    throw new Error('Feed not found');
  }

  return $fetch<string>(decrypt(feed));
});
