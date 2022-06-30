<template lang="">
    <div>
        <h1>Looping List</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Dept</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dt in listUser" :key="dt.id">
                    <td>
                        {{dt.id}}
                    </td>
                    <td>
                        {{dt.name}}

                    </td>
                    <td>
                        {{dt.dept}}

                    </td>
                </tr>
               
            </tbody>
        </table>
        
    </div>
</template>
<script>
export default {
    name:"LoopingComp",
    data() {
        return {
            listUser:[
                {
                    id:1,
                    name:'Nana',
                    dept:'IT'
                },
                {
                    id:2,
                    name:'Farhan',
                    dept:'IT'
                },
                {
                    id:3,
                    name:'Syifa',
                    dept:'VOucher'
                }
            ]
            
        }
    },
    
}
</script>
<style lang="">
    
</style>