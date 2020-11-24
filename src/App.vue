<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  created() {
    this.axios({
      method: "GET",
      url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
      headers: {},
      params: {
        ServiceKey:
          "RrZxeiFZR6vYN4nUi1mz8iCkNZZxEEyIECKuDw%2BbMh5W%2BZ4iUBxNCVTxDaynsHtPkiURin70NYx3kqCQgm2lPg%3D%3D",
        pageNo: 1,
        numOfRows: 2,
        startCreateDt: this.getFormatDate(new Date()),
        endCreateDt: this.getFormatDate(new Date()),
      },
      withCredentials: true,
    }).then((res) => {
      console.log("res :", res);
    });
  },
  methods: {
    getFormatDate(date) {
      var year = date.getFullYear();
      var month = 1 + date.getMonth();
      month = month >= 10 ? month : "0" + month;
      var day = date.getDate();
      day = day >= 10 ? day : "0" + day;
      return year + "-" + month + "-" + day;
    },
  },
};
</script>

<style></style>
