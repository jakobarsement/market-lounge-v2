import Link from 'next/link'

export default function PrimaryNavbar() {
  return (
    <div className="header-main">
      <div className="logo-left"></div>
      <div className="flex justify-center">
        <Link className="option" href="/">
          <h4>Home</h4>
        </Link>
        <Link className="option" href="/company">
          <h4>Company</h4>
        </Link>
        <Link className="option" href="/companypage">
          <h4>Books</h4>
        </Link>
        <Link className="option" href="/companypage">
          <h4>About Us</h4>
        </Link>
      </div>
    </div>
  )
}
