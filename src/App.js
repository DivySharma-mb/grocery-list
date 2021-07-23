import React from "react";
import "./App.css";
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: window.localStorage.itemList
        ? JSON.parse(window.localStorage.itemList)
        : [],
    };
    this.addItem = this.addItem.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const id = Math.ceil(Math.random() * 10000000);
    const itemName = e.currentTarget.item.value;
    const units = e.currentTarget.units.value;
    const price = e.currentTarget.price.value;

    this.setState((currentState) => {
      return {
        itemList: currentState.itemList.concat([
          { id, itemName, units, price },
        ]),
      };
    });
    e.currentTarget.reset();
    setTimeout(() => {
      saveList(this.state.itemList);
    }, 500);
  }

  editEntry(editedValues) {
    this.setState((currentState) => {
      return {
        itemList: currentState.itemList.map((entry) => {
          if (entry.id === editedValues.id) {
            return editedValues;
          } else {
            return entry;
          }
        }),
      };
    });
    setTimeout(() => {
      saveList(this.state.itemList);
    }, 500);
  }

  deleteEntry(id) {
    this.setState((currentState) => {
      return {
        itemList: currentState.itemList.filter((entry) => {
          return id !== entry.id;
        }),
      };
    });
    setTimeout(() => {
      saveList(this.state.itemList);
    }, 500);
  }
  render() {
    if (this.state.itemList.length !== 0){
      return (
        <>
          <Form onSubmit={this.addItem} />
          <Table
            itemList={this.state.itemList}
            editEntry={this.editEntry}
            deleteEntry={this.deleteEntry}
          />
        </>
      );
    } else{
      return (
        <>
          <Form onSubmit={this.addItem} />
        </>
      )
    }
  }
}


const saveList = (itemList) => {
  window.localStorage.setItem("itemList", JSON.stringify(itemList));
};

export default App;
