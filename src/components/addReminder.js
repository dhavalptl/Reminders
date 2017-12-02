import React, { Component } from 'react';
import './addReminder.css';

class AddReminder extends Component {
    constructor(props){
        super(props);
        this.state = {
            reminderText: '',
            reminderDate: ''
        };
    }
    handleEnterKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.addReminder();
        }
    }
    onReminderTextChange = (event) => {
        const val = event.target.value;
        this.setState({
            reminderText: val
        });
    }
    onDateSelect = (event) => {
        const val = event.target.value;
        this.setState({
            reminderDate: val
        });
    }
    addReminder = () => {
        const {reminderText, reminderDate} = this.state;
        if(reminderText){
            this.props.handleAddReminder({reminderText, reminderDate});
            this.setState({
                reminderText: '',
                reminderDate: ''
            });
        }
    }
    render() {
        return (
            <div className="inputs">
                <input type="text" className="form-control addInput" placeholder="Enter reminder text" value={this.state.reminderText} onChange={this.onReminderTextChange} onKeyPress={this.handleEnterKeyPress}/>
                <input type="date" className="form-control dateInput" onChange={this.onDateSelect} value={this.state.reminderDate}/>
                <button className="btn btn-info addIcon" onClick={this.addReminder}>&#43;</button>
            </div>
        );
    }
}

export default AddReminder;