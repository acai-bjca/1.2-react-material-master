
import React, {Component} from 'react';
import '../App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import Card from '@material-ui/core/Card';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

export class TodoApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    render() {           
        return (
            <div className="TodoApp">                
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>

                    <TextField                    
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}>
                    </TextField>
                    <br/><br/>
                    
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <TextField
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}>
                    </TextField>
                    <br/><br/>

                    <label htmlFor="due-date" className="right-margin">
                        Date:
                    </label>                    
                    <DatePicker
                        label="Basic example"
                        animateYearScrolling                  
                        onChange={this.handleDateChange}
                        selected={this.state.dueDate}                        
                        placeholderText="Due date">
                    </DatePicker>
                    <br/><br/>

                    <Button
                        type="submit"                        
                        variant="contained"
                        color="primary"
                        className="submit"
                        title="Add">
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}
