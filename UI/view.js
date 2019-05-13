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

    static showAdd(){
        document.getElementById('add').setAttribute('style','display: relative');
    }

    static hideAdd() {
        document.getElementById('add').setAttribute('style', 'display: none');
    }

    static showLogInWindow() {
        document.getElementsByClassName('login-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.cancel-login')[0].onclick = function(){
            View.hideLogInWindow();
        };
    }

    static hideLogInWindow() {
        document.getElementsByClassName('login-window')[0].setAttribute('style', 'display: none');
    }

    static showRemoveWindow(id) {
        document.getElementsByClassName('remove-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.submit-remove')[0].onclick = function(){
            Controller.deletePost(id);
        };
        document.querySelectorAll('.close-remove')[0].onclick = function(){
            View.hideDeleteWindow();
        };
    }

    static hideRemoveWindow() {
        document.getElementsByClassName('remove-window')[0].setAttribute('style', 'display: none');
    }

    static showEditWindow(post) {
        document.getElementsByClassName('edit-window')[0].setAttribute('style', 'display: flex');
        document.getElementsByClassName('edit-form')[0].elements.path.value = post.photoLink;
        document.getElementsByClassName('edit-form')[0].elements.description.value = post.description;
        document.getElementsByClassName('edit-form')[0].elements.tags.value = post.tags.join('#');
        document.querySelectorAll('.submit-edit')[0].onclick = function(){
            Controller.editPost(post);
        };
        document.querySelectorAll('.close-edit')[0].onclick = function(){
            View.hideEditWindow();
        };
    }

    static hideEditWindow() {
        document.getElementsByClassName('edit-window')[0].setAttribute('style', 'display: none');
    }

    static showAddWindow() {
        document.getElementsByClassName('add-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.close-add')[0].onclick = function(){
            View.hideAddWindow();
        };
    }

    static hideAddWindow() {
        document.getElementsByClassName('add-window')[0].setAttribute('style', 'display: none');
    }

    static showEditOrRemoveWindow(post) {
        document.getElementsByClassName('edit-or-remove-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.delete-button')[0].onclick = function(){
            View.showDeleteWindow(post.id)
            View.hideDeleteOrEditWindow();
        };
        document.querySelectorAll('.edit-button')[0].onclick = function(){
            View.showEditWindow(post);
            View.hideDeleteOrEditWindow();
        };
        document.querySelectorAll('.close-edit-or-remove')[0].onclick = function(){
            View.hideDeleteOrEditWindow();
        };
    }

    static hideEditOrRemoveWindow() {
        document.getElementsByClassName('delete-or-edit')[0].setAttribute('style', 'display: none');
    }
};

let photoWall = document.getElementsByClassName("photo-wall")[0];