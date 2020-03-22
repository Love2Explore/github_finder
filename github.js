class GitHub {
  constructor() {
    this.clientId = "cb67c8f83f70197115a2";
    this.Secret = "a5b815364183b193d995a7b1aea35c2f87c89128";
    this.repos_count = 5;
    this.repos_sort = "create:asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    client_id=${this.clientId}&client_secret=${this.Secret}`);

    const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?
    per_pages=${this.repos_count}&sort=${this.repos_sort}&
    client_id=${this.clientId}&client_secrt=${this.Secret}`);

    const profile = await profileResponse.json();
    const profileRepo = await profileRepos.json();

    return { profile, profileRepo };
  }
}
