<template>
    <div class="flex flex-col m-5">
        <h1 class="text-2xl font-bold">코로나 확진자 수</h1>
        <sido-patient></sido-patient>
    </div>
</template>

<script>
import SidoPatient from "../components/SidoPatient"

    export default {
        components:{
            SidoPatient
        }
    }
</script>

<style lang="scss" scoped>

</style>