<template>
    <div>
        <h1>{{ fard }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fard: {}
        }
    },
    mounted: async function(){
        await this.getURL()
    },
    methods:{
        getURL:
            async function(){
                let poopy = this.$route.params.id
                this.fard = poopy
            }
        
    }
}
</script>

<style scoped>

</style>