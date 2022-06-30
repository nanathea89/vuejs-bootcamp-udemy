<template lang="eng">
    <div>
        <h1>Conditional Component</h1>
        <h2 v-if="isShow">is Show = TRUE</h2>
        <button @click="updateShow">Update</button>
        
    </div>
</template>
<script>
export default {
    name:"ConditionalComp",
    data() {
        return {
            isShow:true
        }
    },
    methods: {
        updateShow(){
            this.isShow=!this.isShow
        }
    },
    
}
</script>
<style lang="">
    
</style>