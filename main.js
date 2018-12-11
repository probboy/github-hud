// https://api.github.com/users/probboy?access_token=4ec7313139da563e8455284012451a215ac46579
const PROFILE = axios.get("https://api.github.com/users/probboy?access_token=4ec7313139da563e8455284012451a215ac46579");


PROFILE.then((res) => {
    var myPic = document.createElement('img');
    myPic.className = 'card-img-top';
    myPic.src = res.data.avatar_url;
    var myPicFrame = document.createElement('div');
    myPicFrame.className = 'card';
    var myPicContainer = document.querySelector('#mypiccontainer');
    myPicContainer.appendChild(myPicFrame);
    myPicFrame.appendChild(myPic);
    var myPicCardBody = document.createElement('div');
    myPicCardBody.className = 'card-body';
    myPicFrame.appendChild(myPicCardBody);
    var myName = document.createElement('h5');
    myName.className = 'card-title';
    myName.innerHTML = res.data.name;
    myPicCardBody.appendChild(myName);
    var myCardText = document.createElement('p');
    myCardText.innerHTML = 'Welcome to my home page, ';
    myCardText.innerHTML += 'currently I have ';
    myCardText.innerHTML += res.data.public_repos;
    myCardText.innerHTML += ' reponsitories, they are '
   
    var myRepoList = document.createElement('ul');

    const REPOS = axios.get('https://api.github.com/users/probboy/repos');
    
    REPOS.then((res) => {
        var repo = [];
        for (i = 0; i < res.data.length; i++) {
            console.log(i);
            repo[i] = document.createElement('li');
            repo[i].innerHTML = res.data[i].name;
            myRepoList.appendChild(repo[i]);
        }
    myCardText.appendChild(myRepoList);
    myCardText.className = 'card-text';
    myPicCardBody.appendChild(myCardText);

    var myRepoButton = document.createElement('a');
    myRepoButton.className = 'btn btn-primary';
    myRepoButton.innerHTML = 'Go to my Repository'
    myRepoButton.href = 'https://github.com/probboy?tab=repositories';
    myPicCardBody.appendChild(myRepoButton);
    });

});

