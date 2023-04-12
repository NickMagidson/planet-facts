import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="mercury">Mercury</Link></li>
          <li><Link to="venus">Venus</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar