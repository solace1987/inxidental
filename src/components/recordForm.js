import React, { Component } from 'react'
import {Grid, Button, Form, Select, TextArea,} from 'semantic-ui-react'

export class Record extends Component{

    constructor(props){
    super(props)

        this.state={data:{},user:'',dept:'',
                    incident:'',category:'',descr:'',
                    priority:'', resolu:'',status:'',
                   }

      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }


      handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }
    handleSubmit(e){
      /*let data=this.state;
      this.setState({data:data})  */      
      console.log(this.state)
      
    }

    render(){
    return(
  <Form onSubmit={this.handleSubmit}>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Form.Field>
          <label>User</label>
          <input name='user' onChange={this.handleChange} type='text' placeholder='Name' className='info' value={this.state.user} />
        </Form.Field>
        <Form.Field>
          <label>Incident</label>
          <input onChange={this.handleChange} name='incident' placeholder='Incident' value={this.state.incident}/>
        </Form.Field>
        <Form.Field>
          <label>Department</label>
           <Select  onChange={(e,data) => {this.setState({dept:data.value})}} value={this.state.dept} name='dept' placeholder='Department' options={[{value:'HR',text:"HR"},{value:'finance',text:"Finance"},{value:'purchasing',text:"Purchasing"},{value:'Prepress',text:"Prepress"}]} />
        </Form.Field>
        <Form.Field>
          <label>Priority</label>
           <Select onChange={(e,data) => {this.setState({priority:data.value})}} value={this.state.priority}
                    name='priority' placeholder='Department' 
                    options={[{value:'Critical',text:"Critical"},{value:'high',text:"High"},{value:'low',text:"Low"}]} />
        </Form.Field>
      </Grid.Column>
      
    <Grid.Column>
      <Form.Field>
      <label>Description</label>
        <TextArea onChange={this.handleChange} value={this.state.descr} name='descr' placeholder='Description' style={{ minHeight:40 }} />
     </Form.Field>
     <Form.Field>
     <label>Resolution</label>
        <TextArea onChange={this.handleChange} value={this.state.resolu} name='resolu' placeholder='Resolution' style={{ minHeight: 40 }} />
     </Form.Field>
     <Form.Field>
          <label>Status</label>
           <Select onChange={(e,data) => {this.setState({status:data.value})}} value={this.state.status} name='status' placeholder='Status' options={[{value:'open',text:"Open"},{value:'closed',text:"Closed"}]} />
        </Form.Field>
         
  </Grid.Column>
  </Grid>

  <Grid style={{padding:15}} centered='true'>
      <Button size='big' color='red'  type='submit' >Submit</Button>
      </Grid>
</Form>

    )}

}