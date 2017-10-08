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
            props.message.map((item, i) => {
                return (
                    <Message
                        key={i}
                        from={item.from}
                        text={item.text}
                    />
                );
            })
        }
    </div>
);

export default MessageList;