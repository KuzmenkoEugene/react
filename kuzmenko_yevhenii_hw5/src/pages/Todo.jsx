import React, {useState, useEffect} from 'react'

import { Listusers } from './ListUsers/ListUsers';
import { TodoForm } from './TodoForm/TodoForm';
import { getTodo, deleteTodoItem} from '../services/todoService';
import { COLOR_FOR_CONTAINER } from '../constants/todoConstants.jsx';

import Container from '@mui/material/Container';



export default function Todo() {
    const [list, setList] = useState([]);
  
    useEffect(() => {
        (async () => {
        setList(await getTodo());
        })();
    }, []);

    const deleteUser = (id) => {
        (async () => {
            try {
                await deleteTodoItem(id);
                setList((prevState) => prevState.filter((item) => item.id !== id));
            } catch (err) {
                console.log(err);
            }
        })();
    }

    return (
        <Container maxWidth="sm" sx={{ bgcolor: COLOR_FOR_CONTAINER}}>
            <div className="App">
                <TodoForm  list={list} setList={setList}/>
                <Listusers list={list} setList={setList} onDeleteUser={deleteUser} />
            </div>
        </Container>
    )
}