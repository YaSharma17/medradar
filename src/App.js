import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UntitledPage from './components/UntitledPage/index1';
import AOS from 'aos';
import Sticky from 'sticky-js';
import { isMobile } from 'react-device-detect';
import 'aos/dist/aos.css';
import './fonts.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

function App() {
  const stickyRef = useRef(null);
  let stickyInstance = null;

  useEffect(() => {
    const initializeSticky = () => {
      AOS.init({ offset: isMobile ? 10 : 100 });
      stickyInstance = new Sticky(stickyRef.current);
    };

    const cleanupSticky = () => {
      AOS.refresh();
      if (stickyInstance) {
        stickyInstance.destroy();
        stickyInstance = null;
      }
    };

    const timerId = setTimeout(initializeSticky, 1500);

    return () => {
      clearTimeout(timerId);
      cleanupSticky();
    };
  }, []);

  return (
    <Router hashType="noslash" basename={process.env.BASE_PATH}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/UntitledPage" element={<UntitledPageWithSticky />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
       Screen List: <br />
      <Link to="/UntitledPage">UntitledPage</Link>
    </div>
  );
}

function UntitledPageWithSticky() {
  const stickyRef = useRef(null);

  useEffect(() => {
    const initializeSticky = () => {
      const stickyInstance = new Sticky(stickyRef.current);
      return () => stickyInstance.destroy();
    };

    const cleanupSticky = initializeSticky();

    return cleanupSticky;
  }, []);

  return (
    <div ref={stickyRef}>
      <UntitledPage />
    </div>
  );
}

export default App;
