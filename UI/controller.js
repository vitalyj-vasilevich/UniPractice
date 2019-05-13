let Controller = (function(){
    let photoPosts;
    let userName = '';
    let filterConfig;
    let pageCounter = 1;
    return {
        restore(){
            let localPosts = JSON.parse(localStorage.getItem('localPosts'));
            if(localPosts === null){
                photoPosts = new Posts([
                    {
                        id : '1',
                        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non so',
                        createdAt : new Date('2018-02-23T23:00:00'),
                        author : 'Vitaly Vasilevich',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '2',
                        description : 'vallis vel massa id, porttitor eleifend magna. Aliquam erat volutpat. Aliquam tempu',
                        createdAt : new Date('2019-02-23T23:00:00'),
                        author : 'Vitaly Vasilevich',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '3',
                        description : 'Aenean consectetur, arcu eu malesuada mollis, enim tortor consequat quam, vel feugiat nunc metus a velit. Vivamus viverra massa eu aliquet ultrices.',
                        createdAt : new Date('2020-02-23T23:00:00'),
                        author : 'Vitaly Vasilevich',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['flike4like', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '4',
                        description : 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                        createdAt : new Date('2019-02-23T13:09:00'),
                        author : 'Vitaly Vasilevich',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '5',
                        description : 'Donec vel ante placerat, sagittis dolor at, posuere sapien.',
                        createdAt : new Date('2019-12-23T23:00:00'),
                        author : 'Vitaly Vasilevich',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['gay', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '6',
                        description : 'Quisque velit nisl, accumsan at euismod sit amet, gravida sit amet massa. ',
                        createdAt : new Date('2019-02-25T20:15:00'),
                        author : 'Ivanov Ivan',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'university', 'anime', 'girls'],
                    },
                    {
                        id : '7',
                        description : 'Ut at eros vitae ipsum congue pharetra sit amet sit amet metus.',
                        createdAt : new Date('2018-05-23T23:00:00'),
                        author : 'Ivanov Ivan',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '8',
                        description : 'Nullam eget sapien justo. Aliquam auctor at eros vel varius. Curabitur pellentesque mi ipsum,',
                        createdAt : new Date('2019-02-01T23:00:00'),
                        author : 'Ivanov Ivan',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '9',
                        description : 'Phasellus faucibus ex ornare nibh varius, id lacinia dolor bibendum.',
                        createdAt : new Date('2018-02-23T23:00:00'),
                        author : 'Ivanov Ivan',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'health', 'anime', 'girls'],
                    },
                    {
                        id : '10',
                        description : 'Donec vel est congue, varius sapien nec, lobortis justo. Pellentesque accumsan dictum est id commodo.',
                        createdAt : new Date('2018-02-23T23:00:00'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '11',
                        description : 'Sed sem ex, bibendum pellentesque odio at, imperdiet tincidunt est. ',
                        createdAt : new Date('2019-02-21T10:00:00'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'nice', 'anime', 'girls'],
                    },
                    {
                        id : '12',
                        description : 'Ut est erat, molestie non ultricies non, accumsan eget urna.',
                        createdAt : new Date('2019-10-11T16:00:00'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '13',
                        description : 'Sed a suscipit ante, eu fringilla mi. In convallis dolor ut felis rhoncus finibus. ',
                        createdAt : new Date('2019-10-11T16:00:00'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '14',
                        description : 'auris at lorem feugiat pellentesque. Praesent ultrices, est in ',
                        createdAt : new Date('2019-10-11T16:00:00'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '15',
                        description : ' ut interdum ligula. Sed tempus porttitor dignissim. Nulla pulvin',
                        createdAt : new Date('2019-10-11T16:00:00'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '16',
                        description : 'Nam ipsum tellus, tempus vitae pellentesque quis, condimentum sit amet ligula.',
                        createdAt : new Date('2019-11-11T14:35:11'),
                        author : 'Nistuk Pavel',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '17',
                        description : 'Nam sed quam non lorem pharetra sagittis vitae a sapien.',
                        createdAt : new Date('2019-11-11T14:35:11'),
                        author : 'Vasily',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '18',
                        description : 'Sed et diam sapien. Maecenas ac dictum ipsum, nec iaculis enim.',
                        createdAt : new Date('2019-11-11T14:35:11'),
                        author : 'Vasily',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '19',
                        description : 'Proin eros lacus, sodales sed cursus nec, lobortis eu purus. Morbi vel mattis urna.',
                        createdAt : new Date('2019-11-11T14:35:11'),
                        author : 'Petya',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '20',
                        description : 'Proin eros lacus, sodales sed cursus nec, lobortis eu purus. Morbi vel mattis urna.',
                        createdAt : new Date('2019-11-11T14:35:00'),
                        author : 'Petya',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                    {
                        id : '21',
                        description : 'Proin eros lacus, sodales sed cursus nec, lobortis eu purus. Morbi vel mattis urna.',
                        createdAt : new Date('2019-11-11T14:35:00'),
                        author : 'Petya',
                        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
                        hashTags : ['funny', 'cats', 'anime', 'girls'],
                    },
                ]);
            } else {
                localPosts.forEach(item => item.createdAt = new Date(item.createdAt));
                photoPosts = new Posts(localPosts);
            }
        },
        logIn(){
            let login = document.getElementsByClassName('login-form')[0].elements.login.value;
            if(login !== ''){
                userName = login;
                View.hideLogInWindow();
                View.showUI(userName);
                View.showAdd();
                View.showInterface();
                document.getElementsByClassName('add')[0].addEventListener('click', View.showAddWindow);
                document.getElementsByClassName('logout')[0].addEventListener('click', Controller.logOut);
                Controller.displayPosts();
                Controller.saveUser();
                return true;
            }
        },
        add(){
            let path = document.getElementsByClassName('add-form')[0].elements.path.value;
            let description = document.getElementsByClassName('add-form')[0].elements.description.value;
            let tags = document.getElementsByClassName('add-form')[0].elements.tags.value;
            if(path!==''){
                photoPostsList.add({
                    id: photoPostsList.getNextId(),
                    description: description,
                        createdAt: new Date(),
                        author: userName,
                        photoLink: path,
                        likes: [],
                        tags: tags.split('#'),
                });
                View.hideAddWindow();
                Controller.savePhotos();
                Controller.displayPosts();
            }
        },
        logOut(){
            userName = '';
            View.showUI();
            View.hideAdd();
            Controller.showPhotoPosts();
            View.hideOptions();
            Controller.saveUser();
            document.getElementsByClassName('signin')[0].addEventListener('click', View.showLogInWindow);
            document.getElementsByClassName('login-button')[0].addEventListener('click', Controller.logIn);
        },
        loadMore(){
            View.removeMoreButton();
            let posts = photoPosts.getPage(filterConfig, pageCounter * 10);
            ++pageCounter;
            posts.forEach(post => View.displayPost(photoWall, post));
            let len = (photoPosts.getPage(filterConfig, pageCounter * 10, 1)).length;
            if(len !== 0){
                View.displayMoreButton(photoWall);
            }
        },
        showPosts(){
            View.removeAll(photoWall);
            pageCounter = 1;
            let posts = photoPosts.getPage(filterConfig);
            if(posts.length === 0){
                View.removeAll(photoWall);
            }else{
                posts.forEach(post => View.displayPost(photoWall, post));
                if(posts.length === 10 && photoPosts.getPage(filterConfig, 10, 1).length === 1){
                    View.displayMoreButton();
                }
                if(userName == ''){
                    View.hideOptions();
                }
            }
            
        },
        savePosts(){
            localStorage.removeItem('localPosts');
            localStorage.setItem('localPosts', JSON.stringify(photoPosts.photoPosts));
        },
        saveUser(){
            localStorage.removeItem('userName');
            localStorage.setItem('userName', JSON.stringify(userName));
        },
        likePost(post){
            let ppost = photoPosts.get(post.id);
            if(ppost){
                let ind = ppost.likes.indexOf(userName);
                if(index === -1){
                    ppost.likes.push(userName);
                }else{
                    ppost.likes.splice(ind, 1);
                }
            }
            View.removePost(photoWall, ppost);
            Controller.savePosts();
        },
        removePost(id){
            View.hideRemoveWindow();
            photoPosts.remove(id);
            Controller.savePosts();
            Controller.showPosts();
        },
        editPost(post){
            let path = document.getElementsByClassName('edit-form')[0].elements.path.value;
            let description = document.getElementsByClassName('edit-form')[0].elements.description.value;
            let tags = document.getElementsByClassName('edit-form')[0].elements.tags.value;
            if(path!==''){
                photoPostsList.edit(post.id,{
                    id: post.id,
                    description: description,
                    createdAt: post.createdAt,
                    author: post.author,
                    photoLink: path,
                    likes: post.likes,
                    tags: tags.split('#'),
                });
            }
            View.hideEditWindow();
            Controller.savePosts();
            Controller.showPosts();    
        }
    }
}());
Controller.start();