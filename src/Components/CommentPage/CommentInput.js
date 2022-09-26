import React from 'react';
import PropTypes from 'prop-types';

class CommentInput extends React.Component {

    constructor(props) {
        super(props);
        this.focusRef = React.createRef();
    }

    static defaultProps = {
        onSubmit: PropTypes.func,
    }


    componentDidMount() {
        this.focusRef.current.focus();
    }


    render() {
        let { userName, content } = this.props.currentInput;
        return (
            <section className='inputArea'>
                <div className='field'>
                    <span className='fieldName'>User Name:</span>
                    <input 
                        value={userName} 
                        onChange={this.props.onChange}
                    />
                    <span className='fieldName'>Comment Content:</span>
                    <textarea 
                        value={content} 
                        onChange={this.props.onChange} 
                        ref={this.focusRef}
                    />
                </div>
                <div className='fieldButton'>
                    <button onClick={this.props.onSubmit}>
                        Submit
                    </button>
                </div>
            </section>
        );
    }

}

CommentInput.defaultProps = {
    currentInput: {
        userName: "",
        content: "",
    },
}

export default CommentInput;