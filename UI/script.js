(function() {
    var photoPosts = [
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
    
    ]
    
    function sortByDate(posts){
        posts.sort(function(a, b){
            return a.createdAt - b.createdAt;
        });
    }

    function getPhotoPosts(skip, top, filterConfing){
        var filteredPosts = [];
        if(filterConfing){
            if(filterConfing.author){
                for(item of photoPosts){
                    if(item.author == filterConfing.author){
                        filteredPosts.push(item);
                    }
                }
            }
        }
        sortByDate(filteredPosts);
        if(filteredPosts.length - skip >= top){
            return filteredPosts.splice(skip - 1, top);
        }else{
            return filteredPosts.splice(filteredPosts.length - 1 - top, top);
        }
    }
    
    function validatePhotoPost(photoPost){
        if(photoPost.description.length >= 200){
                return false;
        }else{
            return true;
        }
    }

    function getPhotoPost(id){
        for (item of photoPosts){
            if(item.id == id){
                return item;
            }
        }
    }
    
    function addPhotoPost(photopost){
        if(validatePhotoPost(photopost) == true){
            photoPosts.push(photopost);
            return true;
        }else{
            return false;
        }
    }

    function getPostIndex(id){
        var index = -1;
        for(item of photoPosts){
            if(item.id == id){
                index = photoPosts.indexOf(item);
            }
        }
        return index;
    }

    function editPhotoPost(id, photoPost){
        var index = getPostIndex(id);
        if(index == -1) return false;
        if(photoPost.description){
            photoPosts[index].description = photoPost.description;
        }
        if(photoPost.photoLink){
            photoPosts[index].photoLink = photoPost.photoLink;
        }
        if(photoPost.hashTags){
            photoPosts[index].hashTags = photoPost.hashTags;
        }
        return validatePhotoPost(photoPosts[index]);
    }

    function removePhotoPost(id){
        var index = getPostIndex(id);
        if(index == -1){
            return false;
        }else{
            photoPosts.splice(index, 1);
            return true;
        }
    }

    console.log(photoPosts);
    console.log(getPhotoPost(1));
    console.log(validatePhotoPost(photoPosts[1]));
    console.log(addPhotoPost({
        id : '45',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non so',
        createdAt : new Date('2016-02-23T20:00:00'),
        author : 'Vitaly Vasilevich',
        photoLink : 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags : ['funny', 'cats', 'anime', 'girls'],
    }));
    console.log(photoPosts);
    console.log(editPhotoPost(1, {description : 'La-la-la',
        hashTags : ['ouasfh', 'asfdihfjdo']}));
    console.log(photoPosts[0]);
    console.log(removePhotoPost(5));
    console.log(photoPosts);
    console.log(getPhotoPosts(10, 10, { author: 'Vitaly Vasilevich'}));
}());