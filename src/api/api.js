export async function fetchFakePosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Fake API failed");
  return res.json();
}

// Real public API (no backend needed)
export async function fetchRealGitHubUser(username = "octocat") {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("Real API failed");
  return res.json();
}
