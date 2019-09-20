import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {};
  if(!values.printer_name) {
    errors.name = {
      message: 'You need to provide Printer Name'
    }
  }
  if(!values.printer_ip) {
    errors.ip = {
      message: 'You need to provide a Phone number'
    }
  } else if(values.printer_ip=="") {
    errors.ip = {
      message: 'IP must be in International format'
    }
  }
  if(!values.printer_status) {
    errors.status = {
      message: 'You need to provide status'
    }
  } else if (values.printer_status=="") {
    errors.status = {
      message: 'Invalid status'
    }
  }
  return errors;
}

class ContactForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
    const { contact } = nextProps;
    if(contact.date !== this.props.contact.date) { // Initialize form only once
      this.props.initialize(contact)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, contact } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{contact.date ? 'Edit Printer' : 'Add New Printer'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="printer_name" type="text" component={this.renderField} label="Printer Name"/>
            <Field name="printer_ip" type="text" component={this.renderField} label="Printer IP"/>
            <Field name="printer_status" type="text" component={this.renderField} label="Status"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm);
