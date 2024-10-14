import React,{useReducer} from 'react';
const initialState=[];

function reducer(state, action){
    switch(action.type){
        case 'add':
            return [...state,{id:Date.now(),text:action.text}];
        case 'remove':
            return state.filter(todo=>todo.id!==action.id);
        default:
            throw new Error();
            
    }
}

    function TodoApp(){
        const [state, dispatch]=useReducer(reducer,initialState);
        const [text,setText]=React.useState('');
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    dispatch({type:'add',text});
                    setText('');
                }}>
                <input value= {text} onChange={e=>setText(e.target.value)}/>
                <button type='submit'>Add Todo</button>
                </form>
            <ul>
                {state.map(todo=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> dispatch({type:'remove', id:todo.id})}>Remove</button>
                    </li>
                ))}
            </ul>
            </div>
        );
    }
export default TodoApp;
