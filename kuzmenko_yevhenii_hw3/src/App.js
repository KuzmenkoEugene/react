import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOne: [...props.list],
      listTwo: [],
      listThird: []
    }
  }

  oneToTwo = () => {
    let copyList = [...this.state.listOne]
    let lastItem = copyList.shift()

    this.setState({
      listOne: [...copyList],
      listTwo: [...this.state.listTwo, lastItem]
    })
  }

  twoToOne = () => {
    let copyList = [...this.state.listTwo]
    let lastItem = copyList.pop()

    this.setState({
      listTwo: [...copyList],
      listOne: [lastItem, ...this.state.listOne]
    })
  }

  twoToTrird = () => {
    let copyList = [...this.state.listTwo]
    let lastItem = copyList.pop()

    this.setState({
      listTwo: [...copyList],
      listThird: [...this.state.listThird, lastItem]
    })
  }

  deleteItem = () => {
    let copyList = [...this.state.listThird]
    copyList.shift()

    this.setState({
      listThird: [...copyList]
    })
  }

  render() {
     return <>
      <div className="container">
        <div className="container_item">
          <ul className="item_list">
            {
              this.state.listOne.map((item, index) => <li key={index}>{item.title}</li>)
            }
          </ul>
          {
            this.state.listOne.length ? 
            <div className='item_btn'>
              <button onClick={this.oneToTwo} className='btn'>Transfer first to right</button>
            </div>
            : null
          }
        </div>
        <div className="container_item">
          <ul className="item_list">
            {
              this.state.listTwo.map((item, index) => <li key={index}>{item.title}</li>)
            }
          </ul>
          {
            this.state.listTwo.length ? 
            <div className='item_btn'>
              <button onClick={this.twoToOne} className='btn'>Transfer first to left</button>
              <button onClick={this.twoToTrird} className='btn'>Transfer first to right</button>
            </div> 
            : null
          }
        </div>
        <div className="container_item">
          <ul className="item_list">
            {
              this.state.listThird.map((item, index) => <li key={index}>{item.title}</li>)
            }
          </ul>
          {
            this.state.listThird.length ? 
            <div className='item_btn'>
              <button onClick={this.deleteItem} className='btn'>Remove last item</button>
            </div> 
            : null
          }
        </div>
      </div>
    </>
  }
}

export default App;




