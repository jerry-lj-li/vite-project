import React from 'react';
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>Reactd Router Contacts</h1>
        <div>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.map((contact) => {
            <li key={contact.id}>
              <Link to={`contacts/${contact.id}`}>
                {contact.firtst || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}
                {''}
                {contact.favorite && <span>★</span>}
              </Link>
            </li>;
          })}
        </nav>
        <div>
          <form id="search-form" role="search">
            <input
              type="search"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite" />
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>your name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>your friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
