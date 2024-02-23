import React from 'react';
import { Form } from 'react-router-dom';

export default function Contact() {
  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar || ''} key={contact.avatar} />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          {''}
          {/* <Favorite contact={contact} /> */}
        </h1>
        {contact.twitter && (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>{contact.twitter}</a>
          </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record')) {
                event.preventDefault();
              }
            }}></Form>
        </div>
      </div>
    </div>
  );
}
