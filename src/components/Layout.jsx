import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import clsx from 'clsx';

export const Layout = () => {
  return (
    // The "min-h-screen" ensures the footer stays at the bottom on short pages
    // <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100">
    <div className={clsx(
      "min-h-screen flex flex-col text-slate-900 selection:bg-indigo-100",
      "bg-orange-100",
      // "bg-linear-to-br from-white via-slate-50 to-indigo-50",
      // "bg-[url('/path-to-texture.png')] bg-repeat"
    )}>
      <Header />

      {/* Main content grows to fill space */}
      <main className="grow container mx-auto px-4 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
