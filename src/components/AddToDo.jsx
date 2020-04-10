import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


export class AddToDo extends Component {
   state = {
       title : ''
   }

   onChangeTitle = (e) => {
        this.setState( {title : e.target.value} );
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title : ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display : 'flex', margin : '10px'}} >
                <TextField label="Required" required style={{flex : '10', padding : '5px'}} id="standard-required" name="title" placeholder="Enter Item"
                value={this.state.title} onChange={this.onChangeTitle} />
                <Button type="submit" variant="contained" style={buttonStyle}  color="primary">Submit</Button>
            </form>
        )
    }
}


const buttonStyle = {
    padding: '0px 0px 0px 0px',
    flex : '1'
}

export default AddToDo
