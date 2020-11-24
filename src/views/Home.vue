<template>
    <div class="flex flex-col justify-center mt-32 items-center">
      <h1 class="text-3xl font-bold">코로나 19</h1>

      <div class="flex flex-row mt-8">
        <corona title="확진 환자" num="1" color="red" />
        <divider class="mx-3" />
        <corona title="검사중" num="1124" color="orange" />
        <divider class="mx-3" />
        <corona title="확진 환자" num="1" color="blue" />
        <divider class="mx-3" />
        <corona title="사망자" num="1" color="gray" />
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
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>