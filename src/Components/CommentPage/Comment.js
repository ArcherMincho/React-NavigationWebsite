import React from 'react';

class Comment extends React.Component {
    static defaultProps = {
        comment: {
            userName: "",
            content: "",
        },
    };

    duration = (createdTime) => {
        return (+Date.now() - createdTime) / 1000;
    }

    getProcessedContent(content) {
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>');
    }

    render() {
        const comment = this.props.comment;
        const pastTime = this.duration(comment.createdTime);
        return (
            <li>
                <span>{comment.userName}:</span>
                <p dangerouslySetInnerHTML={{ __html: this.getProcessedContent(comment.content) }} />
                {
                    pastTime > 60
                        ? <span>{Math.round(pastTime / 60)} mins ago</span>
                        : <span>{Math.round(Math.max(pastTime, 1))} secs ago</span>
                }
                <button onClick={this.props.onCommentDelete} >
                    DELETE
                </button>
            </li>
        );
    }
}

export default Comment;