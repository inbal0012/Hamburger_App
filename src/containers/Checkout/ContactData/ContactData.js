import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    //alert('you continued');
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Inbal',
        address: {
          street: 'teststreet1',
          zip: '158763',
          country: 'Israel',
        },
        email: 'inbal0012@gmail.com',
      },
      deliveryMethod: 'fastest',
    };

    axios
      .post('/orders.json', order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your email'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Your street'
        />
        <input
          className={classes.Input}
          type='text'
          name='postal'
          placeholder='Your postalCode'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>{' '}
        {/*Todo add onClick*/}
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
