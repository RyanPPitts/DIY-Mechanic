import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ServiceList extends Component {
    static propTypes = { 
        getItems: PropTypes.func.isRequired, 
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
       };
    
// when the component calls the api action
componentDidMount() {
 this.props.getItems();
}

onDeleteClick = id => {
    this.props.deleteItem(id);
  };

    render() { 
        const { items } = this.props.item;
        return(
            <Container>
                    <ListGroup>
                        <TransitionGroup className="service-list">
                            {items.map(({_id, name, cost, description, due_date}) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">


                                    <ListGroupItem>
                                        
                                        
                                        { this.props.isAuthenticated ? 
                                    <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='sm'
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    > Delete Service
                                    &times;
                                    </Button> :null}

                                    <container>
                                    <p>Service Name:  {name}</p>
                                    <p>Service Description : {description}</p>
                                    <p>Service Due Date: {due_date} </p>
                                    <p>Service Cost : {cost}</p>
                                    </container>
                                        
                                    </ListGroupItem>
                                    
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        );
    }
}



//prop mapped to state
// item set in reducer
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect (mapStateToProps, { getItems, deleteItem})(ServiceList);

// mapStateToProps allows us to take our items state and map this into a component property.