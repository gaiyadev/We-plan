import React from 'react';
import moment from 'moment';
const Notification = props => {
    const { notifications } = props;
    return (
        <div className="section grey lighten-4">
            <div className="card z-depth-0 grey lighten-4">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className=" grey lighten-4">
                        {
                            notifications && notifications.map(notification => {
                                return (<li key={notifications.id}>
                                    <span className="pink-text">{notification.user}</span> &nbsp;
                                    <span>{notification.content} </span>
                                    <div className="grey-text note-date">
                                        {moment(notification.time.toDate()).fromNow}
                                    </div>
                                </li>);
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notification;