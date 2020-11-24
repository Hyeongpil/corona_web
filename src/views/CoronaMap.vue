<template>
    <div class="flex flex-col m-5">
      <h1 class="text-2xl font-bold">코로나 확진자 위치</h1>

      <div class="w-full h-screen mt-8">
        <google-map 
            id="map" 
            ref="Map"
            :center=center
            :zoom="16"
        >
        
      <google-map-marker
        v-for="(position, idx) in markers" 
        :key="idx"
        :position="position"
      ></google-map-marker>
    </google-map>
      </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                center:{
                    lat: 37.5773616,
                    lng: 126.9744957
                },
                markers:[
                    {
                       lat: 37.5773626,
                       lng: 126.9711241
                    },
                    {
                       lat: 37.5774626,
                       lng: 126.9724967
                    },
                    {
                       lat: 37.5573626,
                       lng: 126.9124117
                    },
                    {
                       lat: 37.5575626,
                       lng: 126.9774124
                    },
                    {
                       lat: 37.5125151,
                       lng: 126.9125154
                    },
                    {
                       lat: 37.5534636,
                       lng: 126.9715222
                    }
                ]
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>