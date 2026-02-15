const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(path: string) {
  const res = await fetch(`${STRAPI_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
