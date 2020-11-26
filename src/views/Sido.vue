<template>
    <div class="flex flex-col m-5">
        <h1 class="text-2xl font-bold">코로나 확진자 수</h1>
        <sido-patient
            :items="item"
        />
    </div>
</template>

<script>
import SidoPatient from "../components/SidoPatient"

    export default {
        components:{
            SidoPatient
        },
        data() {
            return {
                item: [],
            }
        },
        created() {
        let url = 'https://fcujvs7a5i.execute-api.us-east-2.amazonaws.com/test/sido?auth=corona';
          var axios = require('axios');
          axios({
            method: "GET",
            url: url,
          }).then((res) => {
            let item = res.data;
            this.item = item
          });
        },
        methods: {
          getFormatDate(date) {
            var year = date.getFullYear();
            var month = 1 + date.getMonth();
            month = month >= 10 ? month : "0" + month;
            var day = date.getDate();
            day = day >= 10 ? day : "0" + day;
            return ""+year+month + day;
          },
        },
    }
</script>

<style lang="scss" scoped>

</style>