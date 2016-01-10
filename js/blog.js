/* Testing for Parse 

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("3EN5mKJCAL35QX33H9OOQdGpDBDBCpnft97FLSy4", "XOdC0vj4xQmkMEWrrzW9y9fTlVEfUNnCGquQpgmF");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});

*/


    // Replace this line with the one on your Quickstart Guide Page
Parse.initialize("3EN5mKJCAL35QX33H9OOQdGpDBDBCpnft97FLSy4", "XOdC0vj4xQmkMEWrrzW9y9fTlVEfUNnCGquQpgmF");


var Blog = Parse.Object.extend("Blog");

// a collection lists objects of the same class

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();


var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});

blogs.fetch({
    success: function(blogs) {
    var blogsView = new BlogsView({ collection: blogs });
    blogsView.render();
    $('.main-container').html(blogsView.el);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});







