import axios from "axios";

const API = `https://jsonplaceholder.typicode.com/`;

const getTodo = () => axios(API + `users`).then(({ data }) => data);

const deleteTodoItem = (id) =>
  axios.delete(API + `users/${id}`).then(({ data }) => data);

const addTodoItem = (item) =>
  axios
    .post(API + `users/`, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
.then(({ data }) => data);  

const editTodoItem = (id, item) =>
  axios
    .put(API + `users/${id}`, item, {
      headers: {
        "Content-type": "application/json",
  },
})
.then(({ data }) => data); 

export {
    getTodo,
    deleteTodoItem,
    addTodoItem,
    editTodoItem
}