const Manager=require('../lib/manager');

describe('what does the manager class do',()=>{
    it('returns given office number',()=>{
        const member=new Manager('ivan','1','ivabon','123')
        const result=member.officeNumber
        expect(result).toEqual('123')
    })
})