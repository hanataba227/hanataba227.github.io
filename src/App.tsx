
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg text-slate-900">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-sm border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">
              <a href="/">LIM HUIJIN</a>
            </h1>
            <nav>
              <ul className="flex space-x-6 text-sm font-medium text-slate-600">
                <li><a href="/#hero" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="/#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="/#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="/#awards" className="hover:text-primary transition-colors">Awards</a></li>
                <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
