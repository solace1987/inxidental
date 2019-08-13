import React, { Component } from 'react'
import {Grid, Button, Form, Select, TextArea,} from 'semantic-ui-react'

export class Record extends Component{

    constructor(props){
    super(props)

        this.state={date:'',user:'',department:'',incident:'',category:'',description:'',priority:'', resolution:'',status:'',incidentInfo:{}}
    }

    render(){
    return(
  <Form>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Form.Field>
          <label>User</label>
          <input placeholder='First Name'  />
        </Form.Field>
        <Form.Field>
          <label>Incident</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Department</label>
           <Select placeholder='Department' options={[{value:'hr',text:"HR"},{value:'finance',text:"Finance"},{value:'purchasing',text:"Purchasing"},{value:'Prepress',text:"Prepress"}]} />
        </Form.Field>
        <Form.Field>
          <label>Priority</label>
           <Select placeholder='Department' options={[{value:'Critical',text:"Critical"},{value:'high',text:"High"},{value:'low',text:"Low"}]} />
        </Form.Field>
      </Grid.Column>
      
    <Grid.Column>
      <Form.Field>
      <label>Description</label>
        <TextArea placeholder='Description' style={{ minHeight:40 }} />
     </Form.Field>
     <Form.Field>
     <label>Resolution</label>
        <TextArea placeholder='Resolution' style={{ minHeight: 40 }} />
     </Form.Field>
     <Form.Field>
          <label>Status</label>
           <Select placeholder='Status' options={[{value:'open',text:"Open"},{value:'closed',text:"Closed"}]} />
        </Form.Field>
         
  </Grid.Column>
  </Grid>

  <Grid style={{padding:15}} centered='true'>
      <Button size='big' color='red'  type='submit'>Submit</Button>
      </Grid>
</Form>

    )}

}