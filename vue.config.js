module.exports = {
    devServer: {
        // 프록시 설정
        disableHostCheck: true,
        proxy: {
            // 프록시 요청을 보낼 api의 시작 부분
            '/openapi': {
                // 프록시 요청을 보낼 서버의 주소
                target: 'http://openapi.data.go.kr',
                changeOrigin: true
            }
        }
    }
}