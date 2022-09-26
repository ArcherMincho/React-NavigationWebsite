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



export default CommentList;