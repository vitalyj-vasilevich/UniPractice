class View{
    static createPost(post){
        let tmp = document.querySelector('#post-template');
        let postToPost = tmp.content.cloneNode(true);
        postToPost.querySelectorAll('.photo-block')[0].setAttribute('id', post.id);
        postToPost.querySelector('#author').innerHTML = post.author;
        postToPost.querySelector('#date').innerHTML = post.createdAt.toDateString();
        postToPost.querySelector('#photo').setAttribute('src', post.photoLink);
        let tagString = '';
        post.hashTags.forEach(element => {
            tagString += '#' + element + " ";
        });
        postToPost.querySelector('#tags-list').innerHTML = tagString;
        postToPost.querySelector('#photo-description').innerHTML = post.description;
        return postToPost;
    }

    static displayPost(photoWall, photoPost){
        photoWall.appendChild(View.createPost(photoPost));
    }

    static removeMoreButton(photoWall){
        let more = document.getElementById('more');
        if (more !== null){
            photoWall.removeChild(more);
        }
    }

    static displayMoreButton(photoWall){
        if(photoWall.querySelector('#more') === null){
            let more = document.querySelector('#more-template');
            photoWall.appendChild(more.content.cloneNode(true));
        }
    }

    static hideMoreButton(photoWall){
        document.getElementById('#more').setAttribute('style', 'display: none');
    }

    static removePost(photoWall, id){
        let post = document.getElementById(id);
        if(post){
            photoWall.removeChild(post);
        }
    }   

    static showInterface(){
        let head = document.querySelector('header')[0];
        let logout = document.getElementsByClassName('user-info');
        if(logout){
            head.removeChild(logout[0]);
        }
        head.appendChild(document.querySelector('#log-template').content.cloneNode(true));        
    }

    static replacePost(photoWall, photoPost){
        let post = document.getElementById(photoPost.id);
        if(post !== null){
            photoWall.replaceChild(View.createPost(photoPost), post);
        }
    }

    static removeAll(photoWall){
        while(photoWall.firstChild){
            photoWall.removeChild(photoWall.firstChild);
        }
    }

    static showUI(name){
        let head = document.getElementsByTagName('header')[0];
        let login = document.querySelectorAll('#log-button');
        if(login){
            head.removeChild(login[0]);
        }
        let logout = document.querySelector('#logged-template').content.cloneNode(true);
        logout.querySelector('#user').innerHTML = name;
        head.appendChild(logout);
    }

};

let photoWall = document.getElementsByClassName("photo-wall")[0];
View.displayPost(photoWall, {
    id : '1',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non so',
    createdAt : new Date('2018-02-23T23:00:00'),
    author : 'Vitaly Vasilevich',
    photoLink : 'amine1.jpg',
    hashTags : ['funny', 'cats', 'anime', 'girls']
});
View.displayPost(photoWall, {
    id : '9',
        description : 'Phasellus faucibus ex ornare nibh varius, id lacinia dolor bibendum.',
        createdAt : new Date('2018-02-23T23:00:00'),
        author : 'Ivanov Ivan',
        photoLink : 'anime6.png',
        hashTags : ['funny', 'health', 'anime', 'girls'],
});
View.displayPost(photoWall, {
    id : '21',
        description : 'Proin eros lacus, sodales sed cursus nec, lobortis eu purus. Morbi vel mattis urna.',
        createdAt : new Date('2019-11-11T14:35:00'),
        author : 'Petya',
        photoLink : 'anime8.jpg',
        hashTags : ['anime', 'girls'],
});
View.showUI('Uasya');
View.removePost(photoWall, '21');
View.replacePost(photoWall, {
    id : '1',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non so',
    createdAt : new Date('2018-02-23T23:00:00'),
    author : 'Vitaly Vasilevich',
    photoLink : 'redHat.jpg',
    hashTags : ['pain', 'anger', 'hate']
});
View.removeAll(photoWall);