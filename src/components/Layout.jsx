import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-primary relative">
      <Navigation />
      
      {/* Main Content Area */}
      <main className="relative z-10 pt-20">
        <div>
          {children}
        </div>
      </main>
    </div>
  );
}

