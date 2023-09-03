import React, { useState, useEffect } from 'react';
import { Statistics } from './statistics';
import { ThemeMode } from './themeMode';


const COLOR_RED = 'red';
const COLOR_GREEN = 'green'

const Todo = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://61498bf2035b3600175ba32f.mockapi.io/todo')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  const deleteItem = (index) => {
    let copyList = list
    copyList.splice(index, 1)
    setList([...copyList])
  }

  const changeValue = (index) => {
    let copyList = list
    copyList[index].completed = true
    setList([...copyList])
  }

  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td>Choose theme mode: <ThemeMode/></td>
                    <td>Active:</td>
                </tr>
                {list.map((el, index) => (
                <tr style={{color: el.completed ? COLOR_RED : COLOR_GREEN}} key={index}>
                    <td>{el.title}</td>
                    <td>
                        <button onClick={() => el.completed ? deleteItem(index) : changeValue(index)} key={index}>{el.completed ? "delete" : "Complete"}    
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <Statistics data={list}/>
    </>
  );
};

export {Todo};

