import React from 'react';
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Reactd Router Contacts</h1>
        <div>
          <form action="/" id="search-form" role="search">
            <input
              type="search"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              name="q"
            />
          </form>
        </div>
      </div>
    </>
  );
}
