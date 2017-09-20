import React from 'react';
import {Button} from 'react-bootstrap'

const RemoveList = (props) => {
    return (
      <tfoot>
        <tr>
          <td colSpan="2"></td>
          <td className="text-center">
            <Button bsStyle="warning" bsSize="sm" onClick={(e) => props.removeAll()}> Delete All </Button>
          </td>
        </tr>
      </tfoot>
    )
  }

  export default RemoveList;