//init the github class
const github = new Github();

const ui = new UI();

//getting search input

const searchUser = document.getElementById('searchUser');

//formulating the input

searchUser.addEventListener('keyup' , (e) =>{


    const userText = e.target.value;
    
    if(userText!== ''){
        
        //make git hub user request

        github.getUser(userText)
        .then(data =>{
            if(data.profile.message ==='Not Found'){
                
                
                //show error alert
                ui.alert(userText);
                
            }
            else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        } );
    }else{
        //clear all the profile showing on screen
        ui.clearProfile();
    }

});