import React, { Component } from 'react';
import GridSystem from './GridSystem.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      buyItems:['Dragon Fruit','Potatoes','Sofa'],
      message:'',
    };
  }

  addItem = (e) => {
    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = e.target.newItem.value;
    const isOnTheList = buyItems.includes(newItem);

    if(isOnTheList){
      this.setState({
        message: 'This item is already on the list.'
      })

    } else {
      if (!newItem.replace(/\s/g, '').length){
        this.setState({
          message: 'You have entered only spaces. How about adding something else?'
        })
      } else {  
          this.setState({
          buyItems: [...this.state.buyItems, newItem],
          message: '',
        })
      }}
    e.target.newItem.value = ""; // clears the input value if adding item succeeds
  } 

  removeItem = (item, buyItems) => {
    const newBuyItems = buyItems.filter(buyItem => {
      return buyItem !== item;
    });

    this.setState({
      buyItems: [...newBuyItems]
    })

    if(newBuyItems.length===0){
      this.setState({
        message:'No items in your cart. Add something.'
      })
    }
  }

  removeAll = () => {
    this.setState({
      buyItems: [],
      message:'No items in your cart. Add something.'
    })
  }

  render() {
    const {buyItems, message} = this.state;
    return (
      <GridSystem 
        buyItems={buyItems}
        message={message} 
        removeItem={this.removeItem}
        addItem={this.addItem}
        removeAll={this.removeAll}
      />
    );
  }
}

export default App;