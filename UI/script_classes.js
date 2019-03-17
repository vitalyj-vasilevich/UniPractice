class photoPostsCollection{
    constructor(photoPposts){
        this._photoPosts = photoPposts;
    }
    
    static validatePost(photoPost){
       return (photoPost.description & photoPost.description.length < 200 & photoPost.id &
        photoPost.createdAt & photoPost.author & photoPost.photoLink) 
    }

    get(id){
        let toReturn = this._photoPosts.filter(function (element, id){
            return (element.id == id);
        });
        if(validatePost(toReturn[0])){
            return toReturn[0];
        }
    }

    add(photoPost){
        if(validatePost(photoPost)){
            this._photoPosts[this._photoPosts.length] = photoPost;
            return true;
        }else{
            return false;
        }
    }

    _getPostIndex(id){
        var index = -1;
        for(item of photoPosts){
            if(item.id == id){
                index = photoPosts.indexOf(item);
            }
        }
        return index;
    }

    remove(id){
        if(_getPostIndex(id) != -1){
            this._photoPosts.splice(index, 1);
            return true;
        }else{
            return false;
        }
    }

    editPhotoPost(id, photoPost){
        let index = _getPostIndex(id);
        if(index == -1) return false;
        if(photoPost.description){
            this._photoPosts[index].description = photoPost.description;
        }
        if(photoPost.photoLink){
            this._photoPosts[index].photoLink = photoPost.photoLink;
        }
        if(photoPost.hashTags){
            this._photoPosts[index].hashTags = photoPost.hashTags;
        }
        if(photoPost.likes){
            this._photoPosts[index].likes = photoPost.likes;
        }
        if(photoPost.author){
            this._photoPosts[index].author = photoPost.author;
        }
        return validatePhotoPost(photoPosts[index]);
    }

    getPage(skip = 0, top = 10, filterConfing){
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

    clear(){
        this._photoPosts = [];
    }

    addAll(photoPosts){
        let unvalidated = [];
        for(item of photoPosts){
            if(photoPostsCollection.validatePost(item)){
                add(item);
            }else{
                unvalidated[unvalidated.length] = item;
            }
        }
        return unvalidated;
    }
}