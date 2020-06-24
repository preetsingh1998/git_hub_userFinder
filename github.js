class Github {

    constructor(){
        this.client_id = '4be8493a12887e4d483f';
        this.client_secret = '63bb352463353d65720324e361960837b98cc381';
        this.repos_count = 5;
        this.repos_sort= 'created: asc';
    }


    async getUser(user){


        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile:profile,
            repos:repos
        }



    }

}