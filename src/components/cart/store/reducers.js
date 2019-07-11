
const goodList = JSON.parse(localStorage.getItem('GOODS') || '[]')
//去除在本地存储的GOODS数据
export default function (state=goodList,action){
    // console.log(action)
    switch(action.type){
        case 'ADD_GOODS' :
            const AddList = JSON.parse(JSON.stringify(state))
            const addGoods = AddList.find(item=>item.id===action.goods.id)
            // console.log(addGoods.num )
            if(addGoods){
                addGoods.num +=action.goods.num
            }else{
                AddList.push(action.goods)
            }
            return AddList

        case 'UPDATE_GOODS' :
            const UpdataList =JSON.parse(JSON.stringify(state))
            const updateGoods = UpdataList.find(item=>item.id===action.goods.id)
           updateGoods.num = action.goods.newNum
            return UpdataList

        case 'DELETE_GOODS':
            const DELETEList =JSON.parse(JSON.stringify(state))
            const deleteIndex =DELETEList.findIndex(item=>item.id===action.id)
            DELETEList.splice(deleteIndex,1)
            return DELETEList
        default:
    return state
    }
}

