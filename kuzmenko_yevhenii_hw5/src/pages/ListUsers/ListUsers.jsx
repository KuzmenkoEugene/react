import React, { useState} from "react";
import "./style.scss";
import { editTodoItem } from "../../services/todoService";
import BasicButton from "../../components/button/Button";
import { DELETE_ITEM, CLOSE_FORM, SAVE_ITEM, EDIT_FORM} from "../../constants/todoConstants";

const Listusers = ({list, onDeleteUser, setList}) => {
  const [editItem, setEditItem] = useState(null);

  const editItemForm = (id) => {
    const userToEdit = list.find((user) => user.id === id);

    setEditItem(userToEdit);
  }

  const nameInputValue = (e) => {
    setEditItem((prevState) => ({
      ...prevState,
      name: e.target.value,
    }))
  }

  const usernameInputValue = (e) => {
    setEditItem((prevState) => ({
      ...prevState,
      username: e.target.value,
    }))
  }

  const emailInputValue = (e) => {
    setEditItem((prevState) => ({
      ...prevState,
      email: e.target.value,
    }))
  }

  const phoneInputValue = (e) => {
    setEditItem((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }))
  }

  const sumbitValue = async (id) => {

    const updatedItem = await editTodoItem(id, editItem);

    setList((prevState) =>
            prevState.map((item) =>
              item.id === id ? updatedItem : item
            )
    );

    changeValueEditItemForm()
  }

  const changeValueEditItemForm = () => {
    setEditItem(null)
  }


  return (
    <div className="user_list">
      <div>
        <h2>Users list:</h2>
      </div>
      {list.map((el, index) => (
        <div className="user_item" key={index}>
            <div>
                <p>ID: {el.id}</p>
            </div>
            <div>
                <p>Name: {el.name}</p>
            </div>
            <div>
                <p>Username {el.username}</p>
            </div>
            <div>
                <p>Email {el.email}</p>
            </div>
            <div>
                <p>Phone {el.phone}</p>
            </div>
            <div className="item-buttons">
              <BasicButton actionOnClick={() => {onDeleteUser(el.id); changeValueEditItemForm()}} title={DELETE_ITEM} />
              {
                !editItem && <BasicButton actionOnClick={() => {editItemForm(el.id)}} title={EDIT_FORM} />
              }
              
            </div>
            { 
              editItem && editItem.id === el.id && 
              <div>
                <div className="form_item">
                    <label htmlFor="name">Name:</label> 
                    <input onChange={nameInputValue} type="text" defaultValue={el.name} id="name" name="user_name" />
                </div>
                <div className="form_item">
                    <label htmlFor="username">Username:</label> 
                    <input onChange={usernameInputValue} type="text" defaultValue={el.username} id="username" name="user_username" />
                </div>
                <div className="form_item">
                    <label htmlFor="email">Email:</label> 
                    <input onChange={emailInputValue} type="email" defaultValue={el.email} id="email" name="user_email" />
                </div>
                <div className="form_item">
                    <label htmlFor="phone">Phone:</label> 
                    <input onChange={phoneInputValue} type="tel" defaultValue={el.phone} id="phone" name="user_phone" />
                </div>
                <div className="item_btns">
                  <BasicButton actionOnClick={() => {setEditItem(null)}} title={CLOSE_FORM} />
                  <BasicButton actionOnClick={() => {sumbitValue(el.id)}} title={SAVE_ITEM} />
                </div>
              </div>
            }
        </div>
      ))}
    </div>
  );
};

export { Listusers };


