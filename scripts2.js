$(function(){

//---------Post Constructor-----------//
var ForumPost = function (username, post){
	this.username = username;
	this.post = post;
  this.comments = [];
}

//-------array of posts----------//

  ForumPost.all = [
    new ForumPost('jhars', 'clean clothes'),
    new ForumPost('madbro', 'buy food'),
    new ForumPost('klontz', 'remember to sleep!')
  ];


//----------Save Prototype to Array of posts-------------// 
ForumPost.prototype.saveArray = function() {
	ForumPost.all.push(this);
}

//----------Render Post Prototype to HTML-------------// 
ForumPost.prototype.renderTemplate = function() {
var $post = $(postTemplate(this));
    this.index = ForumPost.all.indexOf(this);
    $post.attr('data-index', this.index);
    $blogPostList.append($post);
  };

//-------------------set up variables AND TEMPLATE-----------//
var $newPost= $('#new-post');
var $blogPostList=$('#blog-post-list');
var postTemplate = _.template($('#post-template').html());

  _.each(ForumPost.all, function (blogpost, index) {
    blogpost.renderTemplate();
  });

//------------------SUBMIT BUTTON FUNCTION---------------//
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



$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})





	});



//-------------Blog To-Dos----------------//

// Comments
// add button on posts to pop-out modal
// add modal from bootstrap
// make template that inserts under POSTS






// Post Count

// Modal Object, localStorage







































