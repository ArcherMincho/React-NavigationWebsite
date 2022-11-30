<<<<<<< HEAD
import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

    static defaultProps = {
        comments: [],
    };

    render() {
        const comments = this.props.comments;
        return (
            <ul>
                {comments.map((c, i) => {
                    return (<Comment key={i} comment={c} onCommentDelete={() => this.props.onCommentDelete(i)} />)
                })}
            </ul>
        );
    }

}



=======
import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

    static defaultProps = {
        comments: [],
    };

    render() {
        const comments = this.props.comments;
        return (
            <ul>
                {comments.map((c, i) => {
                    return (<Comment key={i} comment={c} onCommentDelete={() => this.props.onCommentDelete(i)} />)
                })}
            </ul>
        );
    }

}



>>>>>>> 8d228f5811087b128ef47b6d5cb5ac16c9e3822c
export default CommentList;