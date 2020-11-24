<template>
    <div>
        <div class="flex my-8" v-for="(item, index) in items" :key="index">
            <img 
                src="../assets/sido.png"
                :style="{width:'50px', height:'50px'}"
            />
            <span class="font-bold mx-8 items-center justify-center">{{item.gubun}}</span>
            <div class="flex flex-col items-center mx-8">
                <span>전일 대비 증감 수</span>
                <span>{{item.incDec}}</span>
            </div>
            <div class="flex flex-col items-center mx-8">
                <span>10만명당 발생률</span>
                <span>{{item.qurRate}}%</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props:{
            items: Array,
        }
    }
</script>

<style lang="scss" scoped>

</style>