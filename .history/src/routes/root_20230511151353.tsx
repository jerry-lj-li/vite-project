import React from 'react';
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Reactd Router Contacts</h1>
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
              <a href={`/contacts/1`}>your name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>your friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
