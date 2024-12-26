import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import FeaturedBooks from './components/FeaturedBooks';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import NavBar from './components/Navbar';
import { Routes } from '@routes/index';

const TIMEOUT_MS = 5000;

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(Routes.Home);
    }, TIMEOUT_MS);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedBooks />
      <Footer />
    </div>
  );
}
