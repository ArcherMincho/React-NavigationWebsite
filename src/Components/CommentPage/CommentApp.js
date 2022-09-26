import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentInput: {
                userName: "",
                content: ""
            },
            comments: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.autoLoadPastInput = this.autoLoadPastInput.bind(this);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
    }

    autoLoadPastInput() {
        const userName = localStorage.getItem('userName');
        const content = localStorage.getItem('content');

        let currentInput = this.state.currentInput;
        currentInput.userName = userName ? userName : '';
        console.log(content);
        currentInput.content = content ? content : '';
        this.setState({
            currentInput
        });
    }

    componentDidMount() {
        this.autoLoadPastInput();
    }

    handleInput(e) {
        const currentInput = this.state.currentInput;
        if (e.target.type === 'text') {
            currentInput.userName = e.target.value;
        } else if (e.target.type === 'textarea') {
            currentInput.content = e.target.value;
        }
        this.setState({ currentInput });
    }


    handleSubmit(e) {
        const comments = this.state.comments.slice();
        const userName = this.state.currentInput.userName;
        const content = this.state.currentInput.content;
        if (!userName) return alert('plz input your user name');
        if (!content) return alert('plz input your comment content');

        localStorage.setItem('userName', userName);
        localStorage.setItem('content', content);

        comments.push({
            userName,
            content,
            createdTime: +new Date(),
        });
        this.setState({
            currentInput: {
                userName: userName,
                content: ""
            },
            comments
        });
    }

    handleCommentDelete(index = -1) {
        // console.log("delete comment " + index);
        const comments = this.state.comments.slice();
        comments.splice(index, 1);
        this.setState({ comments });
    }

    render() {
        return (
            <section className='content'>
                <CommentInput currentInput={this.state.currentInput}
                    onChange={this.handleInput}
                    onSubmit={this.handleSubmit}
                />
                <CommentList
                    comments={this.state.comments}
                    onCommentDelete={this.handleCommentDelete}
                />
            </section>
        )
    }
}

export default CommentApp;
