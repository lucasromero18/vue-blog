//EVERYHING WITHIN TEMPLATE TAGS WILL RENDER ON SCREEN
<template>
<div id="add-blog">
  <h2>Add a New Blog Post</h2>
  <form v-if="!submitted">
      <label>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
  <div id="checkboxes">
      <label>Ninjas</label>
      <input type="checkbox" value="ninjas" v-model="blog.categories" />
      <label>Wizards</label>
      <input type="checkbox" value="wizards" v-model="blog.categories" />
      <label>Mario</label>
      <input type="checkbox" value="mario" v-model="blog.categories" />
      <label>Cheese</label>
      <input type="checkbox" value="cheese" v-model="blog.categories" />
    </div>
    <label>Author:</label>
    <select v-model="blog.author">
      <option v-for="author in authors">{{ author }}</option>
    </select>
    <button v-on:click.prevent="post">Add Blog</button>
</form>
<div v-if="submitted">
  <h3>Thanks for adding your post!</h3>
</div>
  <div id="preview">
    <h3>Preview Blog</h3>
    <p>Blog Title: {{ blog.title }} </p>
    <p>Blog Content:</p>
    <p>{{ blog.content }}</p>
    <p>Blog Categories:</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
    <p>Author:  {{ blog.author }}</p>
  </div>
</div>
</template>

<script>

export default {
  data(){
    //SETTING THINGS THAT WILL CHANGE (KIND OF LIKE STATE)
    return{
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false
    }
  },
  //WHEN INPUTS ARE FILLED IN AND BUTTON IS CLICKED, MAKE A POST REQUEST TO UPDATE THE DATABASE WITH NEW BLOG INFO
  methods:{
    post: function() {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data)
        this.submitted = true
      });
    }
  }
}
</script>



//STYLING THIS COMPONENT 
<style>
#addBlog *{
  box-sizing: border-box;
}
#addBlog{
  margin: 20px auto;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
}
#preview{
  margin-top: 10px;
  padding: 10px 20px;
  border: 1px solid black;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>