import React from 'react';
import {Button} from 'react-bootstrap'

const InputForm = (props) => {
    return(
      <header>
        <img className="img-responsive" src={props.svg} alt="It's just a cart bro"/>
          <h1> Shopping List </h1> 
        <form className="form-inline" onSubmit={(e) => {props.addItem(e)}}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
            <input ref={input => this.newItem = input} type="text" placeholder="Eggs please" className="form-control" id="newItem"></input>
          </div>
          <Button type="submit" bsStyle="primary">Add</Button>
        </form>
        </header>
      )
  }

  export default InputForm;