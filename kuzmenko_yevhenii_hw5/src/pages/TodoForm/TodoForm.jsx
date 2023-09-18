import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { addTodoItem } from "../../services/todoService";
import Button from "../../components/button/Button";
import { ADD_ITEM } from "../../constants/todoConstants";

const TodoForm = (props) => {
    const [formList, setFormList] = useState({
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
    })

    let nameInput = useRef();
    let usernameInput = useRef();
    let emailInput = useRef();
    let phoneInput = useRef();

    useEffect(() => {

        setFormList((prevState) => ({
            ...prevState,
            id: props.list.length + 1
        }))

    }, [props.list])

    const handleName = (e) => {

        setFormList((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleUsername = (e) => {
        setFormList((prevState) => ({
            ...prevState,
            username: e.target.value
        }))
    }

    const handleEmail = (e) => {
        setFormList((prevState) => ({
            ...prevState,
            email: e.target.value
        }))
    }

    const handlePhone = (e) => {
        setFormList((prevState) => ({
            ...prevState,
            phone: e.target.value
        }))
    }
    

    const addNewUser = (e) => {
        e.preventDefault();

        if(!formList.name){
            nameInput.current.focus();
            return;
        }

        if(!formList.username){
            usernameInput.current.focus();
            return;
        }

        if(!formList.email){
            emailInput.current.focus();
            return;
        }

        if(!formList.phone){
            phoneInput.current.focus();
            return;
        }
              
        (async () => {
            addTodoItem(formList)

            setFormList({
                id: 0,
                name: '',
                username: '',
                email: '',
                phone: '',
            })

            nameInput.current.value = ''
            usernameInput.current.value = ''
            emailInput.current.value = ''
            phoneInput.current.value = ''
          
            try {
              await props.setList((prevState) => [...prevState, formList]);
              console.log(formList);
            } catch (err) {
              console.log(err);
            }
          })();
      };

    

    return (
        <div className="form">
            <form className="form_inputs">
                <h2>Add new user:</h2>
                <p>Users: {props.list.length}</p>
                <div className="form_item">
                    <label htmlFor="name">Name:</label> 
                    <input ref={nameInput} onChange={handleName} type="text" defaultValue={formList.name} id="name" name="user_name" />
                </div>
                <div className="form_item">
                    <label htmlFor="username">Username:</label> 
                    <input ref={usernameInput} onChange={handleUsername} type="text" defaultValue={formList.username} id="username" name="user_username" />
                </div>
                <div className="form_item">
                    <label htmlFor="email">Email:</label> 
                    <input ref={emailInput} onChange={handleEmail} type="email" defaultValue={formList.email} id="email" name="user_email" />
                </div>
                <div className="form_item">
                    <label htmlFor="phone">Phone:</label> 
                    <input ref={phoneInput} onChange={handlePhone} type="tel" defaultValue={formList.phone} id="phone" name="user_phone" />
                </div>
                <div className="form_item">
                    <Button actionOnClick={(e) => addNewUser(e)} title={ADD_ITEM} />
                </div>
            </form>
        </div>
    )
}

export {
    TodoForm
}