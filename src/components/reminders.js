import React, { Component } from 'react';
import Reminder from './reminder';
import './reminders.css';
class Reminders extends Component {
    handleDeleteReminder = (id) => {
        this.props.handleDeleteReminder(id);
    }
    render() {
        const {reminders} = this.props;
        console.log(reminders);
        if(reminders.length === 0){
            return (
                <div className="card content noradious">
                    <div className="notFoundText">No Reminders !!!</div>
                </div>
            );
        }
        const reminderNodes = reminders.map(reminder => <Reminder key={reminder.id} reminder={reminder} handleDeleteReminder={this.handleDeleteReminder}/>);
        return (
            <div className="card content noradious">
                <ul className="list">
                    {reminderNodes}
                </ul>
            </div>
        );
    }
}

export default Reminders;