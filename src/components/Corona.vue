<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="font-bold" :class="getTextColorClass()">{{title}}</h1>
        <h1 class="font-bold" :class="getTextColorClass()">{{num}}</h1>
    </div>
</template>

<script>
    export default {
        props:{
            title : String,
            num: Number,
            color: String,
        },
        methods: {
            getTextColorClass(){
                return "text-"+this.color+"-600"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>