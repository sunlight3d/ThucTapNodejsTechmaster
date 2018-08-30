import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class AddNewPost extends React.Component {
    render() {
        return (
            <Container>
                <div class="form-group purple-border">
                    <label for="exampleFormControlTextarea4">Colorful border</label>
                    <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>

                <div class="form-group green-border-focus">
                    <label for="exampleFormControlTextarea5">Colorful border on <code>:focus</code> state</label>
                    <textarea class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                </div>
            </Container>
        );
    }
};

export default AddNewPost;