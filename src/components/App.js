import React, { Component } from 'react';
import Header from './header';
import Reminders from './reminders';
import AddReminder from './addReminder';
import {connect} from 'react-redux';
import {addReminder, clearReminders, deleteReminder} from '../actions/reminderAction';
import './App.css';

class App extends Component {
  handleClearAllReminders = () => {
    this.props.clearReminders();
  }
  handleAddReminder = (reminder) => {
    this.props.addReminder(reminder);
  }
  handleDeleteReminder = (id) => {
    this.props.deleteReminder(id);
  }
  render() {
    return (
      <div className="App">
        <Header handleClearReminders={this.handleClearAllReminders}/>
        <Reminders reminders={this.props.reminders} handleDeleteReminder={this.handleDeleteReminder}/>
        <AddReminder handleAddReminder={this.handleAddReminder}/>
      </div>
    );
  }
}

export default connect((state)=>{
  return {
    reminders: state.reminders
  }
}, {addReminder, clearReminders, deleteReminder})(App);
