//RENDERING ALL CHILD COMPONENTS
// USING <router-view></router-view> WILL RENDER ALL COMPONENTS UNDER ROUTES
<template>    
  <div>
  <router-view></router-view>
  </div>
</template>


<script>

//IMPORTING COMPONENTS 
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue'

export default {
//DEFINING WHICH CHILD COMPONENTS WERE EXPORTING
    components: {
    'addBlog': addBlog,
    'showBlogs': showBlogs,
    'listBlogs': listBlogs
  },
  data(){
    return{
     
    }
  },
  methods:{
    
  }
}
</script>

//ANY STYLING THAT MUST HAPPEN ON DATA
<style>

</style>
