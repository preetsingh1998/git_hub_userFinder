class UI {

    constructor (){

        this.profile = document.getElementById('profile');
    }

    showProfile(user){

        console.log(user);

        this.profile.innerHTML = `
        
        <div class="card card-body mb-3">

            <div class="row">
                <div class="col-md-4">

                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>

                </div>

                <div class="col-md-8">

                    <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                    <span class="badge badge-secondary">Public gists:${user.public_gists}</span>
                    <span class="badge badge-success">Followers:${user.followers}</span>
                    <span class="badge badge-info">Following:${user.following}</span>
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item">Company Name: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Joined Git: ${user.created_at}</li>
                    </ul>

                </div>

            </div>

        </div>

        <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
        
        <div id="repos">
        </div>

        `;

    }

    showRepos(repos){

        let output = '';

        repos.forEach( repo => {

            output += `

            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                       <a href="${repo.html_url}" target="_blank">${repo.name}</a> 
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watches:${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks:${repo.forms_count}</span>
                    </div>
                </div>
            </div>

            `;

            
            
           
        });
             //output
             document.getElementById('repos').innerHTML = output;
    }

    clearProfile(){
        this.profile.innerHTML="";
    }

    alert(name){

        //remove remaining alerts

        this.clearAlertmsg();
        //make a div 
        const div= document.createElement('div');

        //giv it a class

        div.className = `container alert alert-danger`;

        //adding text to it

        div.appendChild(document.createTextNode(`sorry , No profile with ${name} username `));

        //get parent of its loc

        const bodyy = document.body;

        //next sibbling

        const cardBox = document.querySelector('.searchContainer');

        //placing it

        bodyy.insertBefore(div,cardBox);

        //removing itself

        setTimeout(()=>{
            this.clearAlertmsg();
        },3000);



    }

    clearAlertmsg(){

        const clearAlert = document.querySelector('.alert');

        if(clearAlert){
            clearAlert.remove();
        }
    }

}