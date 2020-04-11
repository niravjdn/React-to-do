import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';


export class TodoItem extends Component {

    getStyle = () => {
            return {
                background : '#f4f4f4',
                padding : '10px',
                flex : '10',
                borderbottom : '1px #ccc dotted',
                textDecoration : this.props.todo.completed ?  'line-through' : 'None'
            }
    }


    render() {
        const {id, title, completed} = this.props.todo;
        console.log(completed);
        return (
            <div >
             <Card>
                 <CardContent   style={controls} display="flex">
             
                <Checkbox 
                color="primary"
                style={{flex : '1'}}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                checked = {completed}
                type="checkbox" onChange={this.props.markComplete.bind(this, id)} >
                    </Checkbox>
                    <p  style={this.getStyle()}>{title} </p>
                <Button p={1} color="primary" style={{flex : '1'}}
                 onClick={this.props.delTodo.bind(this, id)}
                >x</Button>

                </CardContent>
                </Card>
            </div>
            
        )
    }
}



TodoItem.proptype = {
    todo : PropTypes.object.isRequired
}

const controls = {
    display: 'flex',
    paddingLeft: '10px',
    paddingBottom: '10px',
    
}


export default TodoItem
