import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    clearReminders = () => {
        this.props.handleClearReminders();
    }
    render() {
        return (
            <header className="header">
                <div className="title">
                    Reminders
                </div>
                <button className="btn btn-danger clearReminder" onClick={this.clearReminders}>
                    Clear Reminders
                </button>
            </header>
        );
    }
}

export default Header;