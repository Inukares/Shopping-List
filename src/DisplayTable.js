import React from 'react';
import {Table} from 'react-bootstrap';
import ListItems from './ListItems.js'
import RemoveList from './RemoveList.js'

const DisplayTable = (props) => {
    return(
      <div className="content">
        <div className="content">
          {
            (props.message !== '' || props.buyItems.length === 0) && <text className="text-danger">{props.message}</text>
          }
        </div>
        {
          props.buyItems.length > 0 &&
          <Table striped bordered condensed hover>
            <caption className="text-center">Shopping List</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead> 
            <ListItems
              buyItems={props.buyItems}
              removeItem={props.removeItem}
            />
            <RemoveList
              removeAll={props.removeAll}
            />
          </Table>
        }
      </div>
    )
  }

  export default DisplayTable;