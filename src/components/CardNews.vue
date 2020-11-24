<template>
    <vs-card class="p-3">
        <template #title>
            <h3>{{title}}</h3>
        </template>
        <template #img>
            <img :src="getImg()" alt="">
        </template>
        <template #text>
            <p>
                {{content}}
            </p>
        </template>
  </vs-card>
</template>

<script>
    import news1 from "@/assets/news1.jpg"
    import news2 from "@/assets/news2.jpg"
    import news3 from "@/assets/news3.jpg"

    export default {
        props:{
            imgPath: String,
            title: String,
            content: String,
        },
        mounted() {
            console.log('imgPath :',this.imgPath);
        },
        methods: {
            getImg(){
                if(this.imgPath == 1) return news1
                if(this.imgPath == 2) return news2
                if(this.imgPath == 3) return news3
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>