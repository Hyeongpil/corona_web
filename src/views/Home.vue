<template>
    <div class="flex flex-col justify-center mt-32 items-center">
      <h1 class="text-3xl font-bold">코로나 19</h1>

      <div class="flex flex-row mt-8">
        <corona title="확진 환자" :num="decideCnt" color="red" />
        <divider class="mx-3" />
        <corona title="검사중" :num="examCnt" color="orange" />
        <divider class="mx-3" />
        <corona title="격리 해제" :num="clearCnt" color="blue" />
        <divider class="mx-3" />
        <corona title="사망자" :num="deathCnt" color="gray" />
      </div>

      <div class="flex flex-col mt-12">
        <div class="flex flex-row justify-center">
          <div class="mr-10">
            <corona-button class="w-40" title="확진자 위치 확인" @click.native="mapClicked()"/>
          </div>
          <corona-button class="w-40" title="코로나 확진자 수" @click.native="sidoClicked()"/>
        </div>

        <div class="flex flex-row justify-center mt-6">
          <div class="mr-10">
            <corona-button class="w-40" title="코로나 뉴스" @click.native="newsClicked()"/>
          </div>
          <corona-button class="w-40" title="선별 진료소" @click.native="screeningCenterClicked()"/>
        </div>

        <div class="flex flex-row justify-center mt-6">
          <div class="mr-10">
            <corona-button class="w-40" title="감염병 정보" @click.native="virusClicked()"/>
          </div>
          <corona-button class="w-40" title="코로나 발원지" @click.native="startedClicked()"/>
        </div>
      </div>
    </div>
</template>

<script>
import corona from "../components/Corona";
import divider from "../components/Divider";
import coronaButton from "../components/CoronaButton";
    export default {
        components: {
            corona,
            divider,
            coronaButton
        },
        data() {
          return {
            clearCnt: 0,
            decideCnt: 0,
            deathCnt: 0,
            examCnt: 0,
          }
        },
        created() {
          let url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?ServiceKey=RrZxeiFZR6vYN4nUi1mz8iCkNZZxEEyIECKuDw%2BbMh5W%2BZ4iUBxNCVTxDaynsHtPkiURin70NYx3kqCQgm2lPg%3D%3D';
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
            this.clearCnt = item.clearCnt
            this.decideCnt = item.decideCnt
            this.deathCnt = item.deathCnt
            this.examCnt = item.examCnt
          });
        },
        methods: {
          newsClicked(){
            this.$router.push("/news");
          },
          virusClicked(){
            this.$router.push("/virus");
          },
          startedClicked(){
            this.$router.push("/started");
          },
          sidoClicked(){
            this.$router.push("/sido")
          },
          screeningCenterClicked(){
            window.location.href = "https://www.mohw.go.kr/react/popup_200128_3.html"
          },
          mapClicked(){
              this.$router.push("/map");
          },
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