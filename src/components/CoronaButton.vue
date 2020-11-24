<template>
    <vs-button color="dark" border class="w-40 font-bold text-2xl">
        {{title}}
    </vs-button>
</template>

<script>
    export default {
        props:{
            title:String
        }
    }
</script>

<style scoped>
::v-deep .vs-button__content{
    font-size: 16px !important
}
</style>