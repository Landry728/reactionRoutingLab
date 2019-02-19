import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return(
    <>
      <header>
        <nav>
          <div>
            <a href="/">Studio Ghibli Wiki</a>
            <ul>
            <li><Link className="links"  to="/">Go Home</Link></li>
            <li><Link className="links"  to="/films">View Films</Link></li>
            <li><Link className="links"  to="/people">View People</Link></li>
            <li><Link className="links"  to="/locations">View Locations</Link></li>
            <li><Link className="links"  to="/species">View Species</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}