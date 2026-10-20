import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DecorationCategories from './components/DecorationCategories';
import DecorationCatalogue from './components/DecorationCatalogue';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

export default function App() {
  const [activeCatalogueCategory, setActiveCatalogueCategory] = useState(null);
  const [enquiryPrefill, setEnquiryPrefill] = useState(null);
  const percentage = '20%';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromIndex = (catId) => {
    setActiveCatalogueCategory(catId);
    scrollTo('catalogue');
  };

  const handleSelectCollectionForEnquiry = (collectionItem) => {
    setEnquiryPrefill(collectionItem);
    scrollTo('contact');
  };

  return (
    <div className="catalogue-app-shell">
      {/* 1. Header & Navigation with Real Logo & 20% Loading Text */}
      <Navbar 
        onNavigate={scrollTo} 
        percentage={percentage} 
      />

      {/* Main Editorial Catalogue Flow */}
      <main id="main-content" className="catalogue-flow">
        {/* 2. Hero Cover Page (20% Text + Shimmer Loading) */}
        <Hero 
          onExploreCatalogue={() => scrollTo('catalogue')}
          onEnquireClick={() => scrollTo('contact')}
          percentage={percentage}
        />

        {/* 3. About Snegam Decorations (20% Text) */}
        <About 
          percentage={percentage} 
        />

        {/* 4. Decoration Categories Directory (20% Text) */}
        <DecorationCategories 
          onSelectCategory={handleSelectCategoryFromIndex}
          percentage={percentage}
        />

        {/* 5. Central Decoration Catalogue (20% Text) */}
        <DecorationCatalogue 
          activeCategory={activeCatalogueCategory}
          onSelectCollectionForEnquiry={handleSelectCollectionForEnquiry}
          percentage={percentage}
        />

        {/* 6. Our Work / Portfolio Showcase (20% Text) */}
        <Portfolio 
          percentage={percentage} 
        />

        {/* 7. Why Choose Us / Philosophy (20% Text) */}
        <WhyChooseUs 
          percentage={percentage} 
        />

        {/* 8. Consultation & Enquiry (20% Text) */}
        <Enquiry 
          prefilledItem={enquiryPrefill} 
          percentage={percentage}
        />
      </main>

      {/* 9. Catalogue Colophon Footer with Real Logo & 20% Text */}
      <Footer 
        onNavigate={scrollTo} 
        percentage={percentage} 
      />
    </div>
  );
}
