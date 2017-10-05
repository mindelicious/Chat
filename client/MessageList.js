import React from 'react';
import style from './MessageList.css';

const Message = props => (
    <div className={style.Message}>
        <strong>{props.from} :</strong>
        <span>{props.text}</span>
    </div>
);

const MessageList = props => (
    <div className={style.messageList}>
        {
            props.message.map((meesage, i) => {
                return (
                    <Message
                        key={i}
                        from={meesage.from}
                        text={message.text}
                    />
                );
            })
        }
    </div>
);

export default MessageList;