//THE searchMixin.js FILE IS CREATED TO RE-USE CHUNKS OF CODE THAT YOU WANT 
//TO USE ACROSS MULTIPLE COMPONENTS, TO PREVENT FROM HAVING TO WRITE IT 
//OVER AND OVER IN EVERY FILE

export default {
computed: {
        filteredBlogs: function (){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search)
            })
        }
    }
}