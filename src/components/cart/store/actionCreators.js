import {ADD_GOODS,UPDATE_GOODS,DELETE_GOODS} from './actionTypes'
export function AddAction(item){
    return {
        type:ADD_GOODS,
        goods:item
    }
}

export function updateGoodsAction(item){
    return {
        type:UPDATE_GOODS,
        goods:item
    }
}

export function deleteGoodsAction(id){
        return {
            type:DELETE_GOODS,
            id    
        }
}