import "./globals.css";

export const metadata = {
  title : "Simple Site",
  description : "Session 2's Material",
}

export default function RootLayout({children} : {children : React.ReactNode}) {
  return (
    <html lang="en">
      <body className="body">
        <header className="navbar">
          <div className="container nav-inner">
            <div className="brand">Simple Site</div>
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="#feature">Feature</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} Simple Site</div>
        </footer>
      </body>
    </html>
  );
}