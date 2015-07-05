$(function(){

//---------Post Constructor-----------//
var ForumPost = function (username, post){
	this.username = username;
	this.post = post;
}

ForumPost.all = [];

ForumPost.prototype.saveArray = function() {
	ForumPost.all.push(this);
}


ForumPost.prototype.renderTemplate = function() {
var $post = $(postTemplate(this));
    this.index = ForumPost.all.indexOf(this);
    $post.attr('data-index', this.index);
    $blogPostList.append($post);
  };


var $newPost= $('#new-post');
var $blogPostList=$('#blog-post-list');
var postTemplate = _.template($('#post-template').html());

  _.each(this.key, function (post, index) {
    post.render();
  });


$newPost.on('submit', function (event) {
	event.preventDefault();


	var user = $('#user-name').val();
    var postContent = $('#blog-post').val();
    var forumPost = new ForumPost(user, postContent);

    forumPost.saveArray();
    forumPost.renderTemplate();

    $newPost[0].reset();
    $('#user-name').focus();




});



	});











































