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
        let url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=RrZxeiFZR6vYN4nUi1mz8iCkNZZxEEyIECKuDw%2BbMh5W%2BZ4iUBxNCVTxDaynsHtPkiURin70NYx3kqCQgm2lPg%3D%3D';
          var axios = require('axios');
          axios({
            method: "GET",
            url: url,
            headers: {},
            params: {
            pageNo: 1,
            numOfRows: 2,
            startCreateDt: this.getFormatDate(new Date()),
            endCreateDt: this.getFormatDate(new Date()),
          },
          }).then((res) => {
            let item = res.data.response.body.items.item;
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