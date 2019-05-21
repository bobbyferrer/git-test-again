class Github {
    constructor() {
        this.client_id = '0ab52338111bf531d0d3';
        this.client_secret = '7248734b9816f11c75b2e3b37b0da80ea7eef3fe';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user) {
       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

       const repoResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    

       const profile = await profileResponse.json();
       const repos = await repoResponse.json();

       return {
        profile,
        repos
    };
    }

    
}