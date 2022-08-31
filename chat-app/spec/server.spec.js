const request = require('request')

describe('get messages', ()=>{
    it('should return 200 ok', (done)=>{
        request.get('http://localhost:8001/messages', (err, res) => {
            console.log(res.body)
            expect(res.statusCode)
            done()
        })
    })

    it('should return a list thats not empty', (done)=>{
        request.get('http://localhost:8001/messages', (err, res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get messages from user', () => {
    it('should return 200 ok', (done)=>{
        request.get('http://localhost:8001/messages/Prabhat', (err, res) => {
            console.log(res.body)
            expect(res.statusCode)
            done()
        })
    })

    it('name should be Ranvijay', (done) => {
        request.get('http://localhost:8001/messages/Ranvijay', (err, res) => {
           expect(JSON.parse(res.body)[0].name).toEqual('Ranvijay')
           done()
        })
    })
})