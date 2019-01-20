//EVERYTHING WITHIN TEMPLATE TAGS WILL RENDER ON SCREEN
<template>    
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
    <h2 v-randomColor>{{ blog.title | toUppercase }}</h2>
    <article>{{ blog.body | snippet  }}</article>
    </div>
  </div>
</template>

<script>
//MUST IMPORT searchMixin.js FILE TO ACCESS RE-USABLE CODE
import searchMixin from '../mixins/searchMixin'

export default {
  data(){
    //SETTING THINGS THAT WILL CHANGE (KIND OF LIKE STATE)
    return{
    blogs: [],
    search: ""
    }
  },
  methods:{
   
  },
  //WHEN CREATED, MAKE A GET REQUEST TO PLACEHOLDER API AND OUTPUT BLOGS #1-10 ON SCREEN
   created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10)
        })
    },
    computed: {
       
    },
   //REGISTERING CUSTOM FILTERS LOCALLY IF NEEDED IN THIS COMPONENT ONLY, OTHERWISE REGISTER IN MAIN.JS
    filters: {
        toUppercase: function(value){
            return value.toUpperCase();
        }
    },
    //REGISTERING CUSTOM DIRECTIVES LOCALLY IF NEEDED IN THIS COMPONENT ONLY, OTHERWISE REGISTER IN MAIN.JS
    directives: {
        'randomColor': {
            bind(el, binding, vnode){
                el.style.color =  "#" + Math.random().toString().slice(2,8)
            }
        }
    },
    //MUST DISPLAY THE PROPERTY USED IN searchMixin.js TO EXECUTE
    mixins: [searchMixin]
}
</script>

//ANY STYLING ON DATA
<style>

#show-blogs{
max-width: 800px;
margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>