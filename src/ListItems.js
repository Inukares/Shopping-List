import React from 'react';
import {Button} from 'react-bootstrap'

const ListItems = (props) => {
    const list = (
      props.buyItems.map(item => {
      let a = props.buyItems.indexOf(item); // to print out number of item nicely
      return(
        <tr key={item}>
          <th scope="row">{++a}</th>
          <td>{item}</td>
          <td>
            <Button bsStyle="danger" onClick={(e) => props.removeItem(item, props.buyItems)}> Delete </Button>
          </td>
        </tr>
        )
      }) 
    ) 
    return (
      <tbody>{list}</tbody>
    )
  }

  export default ListItems;