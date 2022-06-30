<template lang="eng">
    <div>
        
    </div>
</template>
<script>
export default {
    name:"LifecycleHooks", 
    data(){
        return{
            msg :"x"
    }
    },
    beforeCreate(){
        console.log('before create lifecyle hook')
        console.log(this.msg)
    },
    created() {
        console.log('create life cyle hooks ')
         console.log(this.msg)
    },
    beforeMount(){
        console.log('before mount lifecyle hooks')
         console.log(this.msg)
    },
    mounted() {
        console.log('mounted lifecyle hooks')
         console.log(this.msg)
        this.updateMsg()
         console.log(this.msg)
    },
    beforeUpdate() {
        console.log('beforeUpdate lifecyle hooks')
         console.log(this.msg)
    },
    updated() {
        console.log('updated lifecyle hooks')
         console.log(this.msg)
    },
    methods:{
        updateMsg(){
            this.msg ='Update msg'
        }
    }

    
}
</script>
<style lang="">
    
</style>