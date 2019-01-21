//THIS TEMPLATE WILL OUTPUT THE SINGLE BLOG WE ARE LOOKING FOR.
//blog.title AND blog.body WERE BOTH GRABBED FROM THE OBJECT IN THE CONSOLE
<template>

<div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
</div>

</template>


<script>

export default{  
    data(){
    //USING this.$route.params.id WILL GIVE US THAT ROUTE PARAM FROM THE URL AND STORE IT WITHIN HERE
        return{
            id: this.$route.params.id,
            blog: {}
        }
    },
    //USING + this.id BELOW, WILL GRAB WHATEVER LIES WITHIN THE id IN THE RETURN STATEMENT ABOVE 
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            console.log("HELLO THERE", data)
            //DATA.BODY IS THE BODY PROPERTY ON THE OBJECT (DATA) WE GET BACK THAT WE WANT
            this.blog = data.body;
        })
    }
}


</script>


<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}


</style>


