import React, { Component } from 'react';
import './reminder.css';
import moment from 'moment';
class Reminder extends Component {
    onDeleteReminder = () => {
        this.props.handleDeleteReminder(this.props.reminder.id);
    }
    render() {
        const {reminderText, reminderDate} = this.props.reminder;
        const fromNowText = (reminderDate) ? moment(reminderDate).fromNow(): '';
        return (
            <li className="listItem noradious">
                <div className="listItemText">
                    <div className="reminderText">{reminderText}</div>
                    <div className="fromNowText">{fromNowText}</div>
                </div>
                
                <div className="deleteBtn" onClick={this.onDeleteReminder}>&times;</div>
            </li>
        );
    }
};

export default Reminder;