import moment from "moment"

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        
        const createdAtmoment=moment(expense.createdAt)
        const startDateMatch=startDate?startDate.isSameOrBefore(createdAtmoment,'day'):true
        const endDateMatch=endDate?endDate.isSameOrAfter(createdAtmoment,'day'):true
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt ? 1:-1;
        }
        else if(sortBy==='amount'){
            return a.amount<b.amount ? 1:-1;
        }
        else{
            return 0
        }
    })
}

export default getVisibleExpenses