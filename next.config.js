module.exports = {
    async redirects(){
        return [
            {
                source: '/',
                destination: '/1',
                permanent: true
            }
        ]
    }
}