import Reacy, { Component } from 'react';
import io from 'socket.io-client';
import style from './App.css';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import UsersList from './UsersList';
import UserForm from './UserForm';

const socket = io('/');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], message: [], text: '', name: ''};
    }
    // nie jestem pewny czy render w tym miejscu
    render() {
        return this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
    }
    renderLayout() {
        return (
            <div className={style.App}>
                <div className={styleMedia.AppHeader}>
                    <div className={style.AppTitle}>
                        ChatApp
                    </div>
                    <div className={style.appRoom}>
                        App Room
                    </div>
                </div>
                <div className={style.AppBody}>
                    <UsersList
                    users={this.state.users}
                    />
                    <div className={style.MessageWrapper}>
                        <MessageList
                        message={this.state.name}
                        />
                        <MessageForm
                        onMessageSubmit={message => this.handleMessageSubmit(message)}
                        name={this.state.name}
                        />
                    </div>
                </div>
            </div>
        );
    }
    renderUserForm() {
   return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }

    componentDidMount() {
        socket.on('message', message => this.messageRecieve(message));
        socket.on('update', ({users}) => this.chatUpdate(users));
    }

    messageReceive(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
    }

    chatUpdate(users) {
        this.setState({users});
    }  

    handleMessageSubmit(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
        socket.emit('message', message);
    }  

    handleUserSubmit(name) {
        this.setState({name});
        socket.emit('join', name);
    }   

};




export default App;