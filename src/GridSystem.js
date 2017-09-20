import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import cart from './cart.svg'
import InputForm from './InputForm.js'
import DisplayTable from './DisplayTable.js'

const GridSystem = (props) => {
    return (
      <div className="container fluid text-center">
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={10} mdOffset={1} >
            <InputForm addItem={props.addItem} svg={cart}/>
            <DisplayTable 
                buyItems={props.buyItems}
                removeItem={props.removeItem}
                removeAll={props.removeAll}
                message={props.message}
              />
          </Col>
         </Row>
      </Grid>
    </div>
    )
  
  }

export default GridSystem;