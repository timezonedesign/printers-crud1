import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='print'/> {contact.printer_name}
        </Card.Header>
        <Card.Description>
          <p><Icon name='computer'/> {contact.printer_ip}</p>
          <p><Icon name='check'/> {contact.printer_status}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/contacts/edit/${contact.date}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteContact(contact.date)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
}
