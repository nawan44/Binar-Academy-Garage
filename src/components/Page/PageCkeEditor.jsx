import React, { Component } from 'react';
import { Form} from 'reactstrap';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
import { Button } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PageCkeEditor extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            categories: '',
            products: []
        };
        this.handleChange = this.handleChange.bind( this );
        this.onEditorChange = this.onEditorChange.bind( this );
    }

    onEditorChange( evt ) {
        this.setState( {
            categories: evt.editor.getData()
        } );
    }
   
    handleChange( changeEvent ) {
        this.setState( {
            categories: changeEvent.target.value
        } );
    }


    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://reduxblog.herokuapp.com/api/posts?key=barangku',
        {
            categories: this.state.categories
        }
        )
            .then(res => {
                    alert('article was added')
                    this.updateData()
                }
            )
      }
      updateData(){
        axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
        .then(res => {
            this.setState({
              products: res.data
            })
        });
      }
      
      componentDidMount(){
        axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
        .then(res => {
            this.setState({
              products: res.data
            })
        });
      }
      
    render() {
        return (
            <Form   onSubmit={this.handleSubmit}   >
                <CKEditor
                onclick="alert(CKEDITOR.instances.editor1.getData());"
                    categories={this.state.categories}
                    onChange={this.onEditorChange} />
                    <label>
                        Change val:
                        <textarea defaultValue={this.state.categories} onChange={this.handleChange} />
                    </label>
                    <EditorPreview categories={this.state.categories} />
                    <Button color='primary' type="submit" > submit </Button>

                    </Form>
             
        );
    }
}

class EditorPreview extends Component {
    render() {
        return (
            <div className="editor-preview">
                <h2>Rendered content:</h2>
                <div dangerouslySetInnerHTML={ { __html: this.props.categories } }></div>
            </div>
        );
    }
}

EditorPreview.defaultProps = {
    categories: ''
};

EditorPreview.propTypes = {
    categories: PropTypes.string
};


export default PageCkeEditor;
