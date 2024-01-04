import Image from 'next/image';
import './Header.css';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="header-container">
      <div className="inner-header-container">
        <div className="logo-container">
          <Image src="/static/logo.svg" alt="" width={30} height={30} />
          <h3>Ankur</h3>
        </div>
        <div className="nav-container">
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About us </Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
