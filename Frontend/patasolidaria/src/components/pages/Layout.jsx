import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Pata Solidaria</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/servicos">Logout</a>
            </li>
            </ul>

        </div>
        </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;