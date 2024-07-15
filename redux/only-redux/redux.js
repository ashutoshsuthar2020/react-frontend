const redux =require( "redux");

const INITIAL_VALUE = {
    counter:1
}

const reducer = (store=INITIAL_VALUE, action)=>{
    let newStore = store;
    if(action.type==='INCREMENT'){
        newStore={counter:store.counter+1}
    }
    else 
    if(action.type==='DECREMENT'){
        newStore={counter:store.counter-1}
    }
    else 
    if(action.type==='ADDITION'){
        newStore={counter:store.counter+action.payload.value}
    }
    else 
    if(action.type==='SUBTRACTION'){
        newStore={counter:store.counter-action.payload.value}
    }
    return newStore
}
const store = redux.createStore(reducer);
const subscriber = ()=>{
    const state=store.getState();
    console.log(state)
}
store.subscribe(subscriber)
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'ADDITION',payload:{value:7}})
store.dispatch({type:'SUBTRACTION', payload:{value:31}})