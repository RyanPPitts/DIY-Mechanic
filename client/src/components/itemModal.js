import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    date: '',
    cost: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Add Service
          </Button>
        ) : (
          <h4 className='mb-3 ml-4'>Please log in to manage services</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Services List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Service</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add service'
                  onChange={this.onChange}
                />

                <Label for='item'>Due Date</Label>
                <Input
                  type='date'
                  name='date'
                  id='item'
                  placeholder='Add service date'
                  onChange={this.onChange}
                />

                <Label for='item'>Cost</Label>
                <Input
                  type='text'
                  name='cost'
                  id='item'
                  placeholder='Add service cost'
                  onChange={this.onChange}
                />

                
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Service
                </Button>


              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);