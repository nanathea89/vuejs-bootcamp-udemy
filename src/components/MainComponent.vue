<template lang="">
    <div>
        <h1>Dynamic Component</h1>
        <button @click ="changeComponent">Change Component</button> 
        <component :is="isComponent"></component>
        
    </div>
</template>
<script>
import ComponentOne from './Component1.vue'
import ComponentTwo from './Component2.vue'
export default {
    name:"DynamicComponent",
    components:{
        ComponentOne,
        ComponentTwo
    },
    data() {
        return {
            isComponent:"ComponentOne"
        }
    },
    methods: {
        changeComponent(){
            console.log(this.isComponent)
            if(this.isComponent === "ComponentOne"){
                console.log('isCOmponent = COmponentOne')
                this.isComponent = "ComponentTwo"
            }else if(this.isComponent === "ComponentTwo"){
                this.isComponent = "ComponentOne"
                console.log('isCOmponent = ComponentTwo')
            }else{
                console.log('tidak ditemukan')
            }
        }
    },
    
}
</script>
<style lang="">
    
</style>