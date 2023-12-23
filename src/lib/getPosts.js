export default async function getPosts() {
  const res = await fetch(`https://suitmedia-backend.suitdev.com/api/ideas`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const posts = await res.json();

  return posts;
}
