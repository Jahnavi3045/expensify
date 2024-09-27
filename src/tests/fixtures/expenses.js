import moment from "moment"

const expenses=[{
    id:'1',
    description:'water bill',
    amount:1000,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'2',
    description:'wifi bill',
    amount:800,
    createdAt:0
},{
    id:'3',
    description:'gas bill',
    amount:1200,
    createdAt:moment(0).add(4,'days').valueOf()
},]

export default expenses