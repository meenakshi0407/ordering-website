import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Bulk Order App',
  description: 'Bulk vegetable/fruit ordering platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        {/* Navigation Header */}
        <header className="bg-green-200 px-6 py-4 shadow">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-green-900 mb-2 sm:mb-0">🥦 Bulk Order App</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline text-green-800">Home</Link>
              <Link href="/order" className="hover:underline text-green-800">Order</Link>
              <Link href="/track" className="hover:underline text-green-800">Track</Link>
              <Link href="/admin" className="hover:underline text-green-800">Admin</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        
        {/* Optional Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12 pb-4">
          © {new Date().getFullYear()} Bulk Order Platform
        </footer>
      </body>
    </html>
  );
}
