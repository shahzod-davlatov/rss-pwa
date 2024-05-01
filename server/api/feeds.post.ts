export default defineEventHandler<{
  body: { url: string };
}>(async (event) => {
  const body = await readBody(event);

  return encrypt(body.url);
});
