import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  /* orderForm includes the fields we want to receive from the user 
  with a nested of all the criterias for your custom input element */
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      zip: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
      },
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

  inputChangedHandler = (event, inputIdentefier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentefier] };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentefier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        {formElementArray.map((element) => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={(event) => this.inputChangedHandler(event, element.id)}
          />
        ))}
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
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