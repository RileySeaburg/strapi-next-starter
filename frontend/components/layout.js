import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

export default function Layout({ preview, children }) {
  return (
    <div className="flex flex-col h-screen">
      <Meta />
      <Alert preview={preview} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
