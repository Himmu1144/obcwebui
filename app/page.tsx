"use client";

import { useEffect } from 'react';
import Image from 'next/image';

// To make TypeScript aware of the functions we are adding to the window object
declare global {
  interface Window {
    scrollToServices: () => void;
    scrollToHero: () => void;
    selectCar: (carBrand: string) => void;
    showServiceDetails: (service: string) => void;
    closeLocationPopup: () => void;
    filterLocations: () => void;
    selectLocation: (location: string) => void;
    closeCarPopup: () => void;
    filterCars: () => void;
  }
}

// Testimonials Component with Unsplash images
const Testimonials = () => { 
  return (
    <section className="testimonial-section">
     <div className="banner-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="banner-content">
      <h2 className="section-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Client <span>Experiences</span></h2>
    </div>
  </div>


      <div className="testimonial-container">
        {/* removed old .testimonial-header */}
        <div className="testimonial-slider">
          <div className="testimonial-carousel">
            {/* Testimonial Card 1 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="testimonial-quote">“</span>
                <p className="testimonial-text">The attention to detail on my Audi A8 was impeccable. The car felt brand new after the detailing service. Unmatched quality and professionalism. Highly recommend!</p>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-author">
                  <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" alt="Rohan Sharma" width={60} height={60} className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">Rohan Sharma</h4>
                    <p className="author-car">Audi A8 Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="testimonial-quote">“</span>
                <p className="testimonial-text">My BMW 5 Series had some complex electrical issues that other workshops couldn't fix. The team here diagnosed and resolved it within a day. Truly experts in their field.</p>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-author">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b2916e?w=60&h=60&fit=crop&crop=faces" alt="Priya K." width={60} height={60} className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">Priya K.</h4>
                    <p className="author-car">BMW 5 Series Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="testimonial-quote">“</span>
                <p className="testimonial-text">The denting and painting job on my Mercedes E-Class was flawless. The color match is perfect, and you can't even tell there was any damage. Exceptional craftsmanship.</p>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-author">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces" alt="Arjun Mehra" width={60} height={60} className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">Arjun Mehra</h4>
                    <p className="author-car">Mercedes-Benz E-Class Owner</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Testimonial Card 4 */}
             <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="testimonial-quote">“</span>
                <p className="testimonial-text">I was impressed with the transparency and communication throughout the service of my Porsche Cayenne. The final bill was exactly as quoted. Trustworthy and reliable.</p>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-author">
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces" alt="Anjali Singh" width={60} height={60} className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">Anjali Singh</h4>
                    <p className="author-car">Porsche Cayenne Owner</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Testimonial Card 5 */}
             <div className="testimonial-card">
              <div className="testimonial-content">
                <span className="testimonial-quote">“</span>
                <p className="testimonial-text">The convenience of their doorstep AC service for my Range Rover was a game-changer. The technician was punctual, skilled, and very professional. Superb experience!</p>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-author">
                  <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=faces" alt="Vikram Rathod" width={60} height={60} className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">Vikram Rathod</h4>
                    <p className="author-car">Range Rover Owner</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="slider-nav">
            <button className="prev-btn" aria-label="Previous Testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button className="next-btn" aria-label="Next Testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};





// News & Updates Section Component
const NewsUpdatesSection = () => {
  const newsItems = [
    {
      id: 1,
      category: "Service Update",
      title: "New Express Detailing Service Launched",
      excerpt: "Get your car detailed in under 2 hours with our new express service. Premium quality, faster turnaround.",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
      readTime: "2 min read"
    },
    {
      id: 2,
      category: "Technology",
      title: "AI-Powered Diagnostics Now Available",
      excerpt: "Experience cutting-edge car diagnostics with our new AI system that predicts issues before they occur.",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1625773049545-fb23fc7d6e62?w=800&q=80",
      readTime: "3 min read"
    },
    {
      id: 3,
      category: "Expansion",
      title: "Now Serving 5 New Areas in Delhi NCR",
      excerpt: "We've expanded our service coverage to include Dwarka, Rohini, Pitampura, Janakpuri, and Mayur Vihar.",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      readTime: "1 min read"
    },
    {
      id: 4,
      category: "Partnership",
      title: "Partnership with Mercedes-Benz India",
      excerpt: "Proud to announce our official partnership as an authorized service provider for Mercedes-Benz vehicles.",
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      readTime: "4 min read"
    },
    {
      id: 5,
      category: "Award",
      title: "Best Doorstep Service Provider 2024",
      excerpt: "Honored to receive the 'Excellence in Automotive Service' award at the India Auto Summit 2024.",
      date: "Nov 20, 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      readTime: "2 min read"
    },
    {
      id: 6,
      category: "Tips & Guides",
      title: "Winter Car Care: Essential Maintenance Tips",
      excerpt: "Prepare your vehicle for the winter season with our comprehensive maintenance guide and expert tips.",
      date: "Nov 15, 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      readTime: "5 min read"
    }
  ];

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <section className="news-updates-section">
     <div className="banner-header">
        <div className="banner-content">
          <h2 className="section-title">News & <span>Announcements</span></h2>
        </div>
      </div>

      <div className="news-container">

        <div className="news-grid">
          {/* Featured Article */}
          <div className="featured-article">
            <div className="featured-image-wrapper">
              <img src={featuredNews.image} alt={featuredNews.title} className="featured-image" />
              <div className="featured-overlay"></div>
              <span className="featured-category">{featuredNews.category}</span>
            </div>
            <div className="featured-content">
              <div className="featured-meta">
                <span className="featured-date">{featuredNews.date}</span>
                <span className="featured-divider">•</span>
                <span className="featured-readtime">{featuredNews.readTime}</span>
              </div>
              <h3 className="featured-title">{featuredNews.title}</h3>
              <p className="featured-excerpt">{featuredNews.excerpt}</p>
              <a href="#" className="featured-link">
                Read More 
                <svg className="featured-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Regular Articles Grid */}
          <div className="articles-grid">
            {regularNews.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-card-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-card-image" />
                  <span className="news-card-category">{item.category}</span>
                </div>
                <div className="news-card-content">
                  <div className="news-card-meta">
                    <span className="news-card-date">{item.date}</span>
                    <span className="news-card-readtime">{item.readTime}</span>
                  </div>
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-excerpt">{item.excerpt}</p>
                  <a href="#" className="news-card-link">
                    <span>Read More</span>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="news-footer">
          <a href="#" className="view-all-button">
            View All Articles
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};


// PASTE THIS NEW COMPONENT, REPLACING THE OLD Faq COMPONENT

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="banner-header">
        <div className="banner-content">
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
        </div>
      </div>

      <div className="faq-container">
        <div className="faq-grid">
          <div className="faq-list">
            {/* FAQ Item 1 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>What services do you offer at my doorstep?</span>
                <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>We offer premium doorstep car services, including advanced engine diagnostics, tire replacements, brake repairs, battery replacement, and comprehensive detailing. Our expert technicians bring high-quality, convenient care directly to your location, ensuring your vehicle stays in top condition without the need for a visit to the workshop.</p>
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>How do I book a doorstep service?</span>
                <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>To book a doorstep service on our website, use the booking form at the top of the page. Select the service you need, enter your car details and location, choose a preferred time, and confirm the booking. A technician will then arrive at your doorstep to perform the service.</p>
              </div>
            </div>
            {/* FAQ Item 3 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>Are your doorstep services as comprehensive as those at your workshop?</span>
                 <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Yes, our doorstep services are just as comprehensive. Our skilled technicians are equipped with the same state-of-the-art tools and equipment to perform a wide range of services, including oil changes, tire repairs, diagnostics, and detailing, ensuring your car receives high-quality care at your convenience.</p>
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>Is there any additional charge for doorstep service?</span>
                 <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Our premium doorstep services come at a slightly higher cost to cover the added convenience and personalized care. This price includes top-tier service, with expert technicians using high-quality tools and parts, ensuring your vehicle receives the same attention it would in our workshop.</p>
              </div>
            </div>
             {/* FAQ Item 5 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>What brands of cars do you service?</span>
                 <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>We service a wide variety of car brands, from everyday vehicles to luxury and premium cars. Our expert technicians are equipped to handle all makes and models, ensuring high-quality care for every vehicle.</p>
              </div>
            </div>
             {/* FAQ Item 6 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>Can I watch the service being performed?</span>
                 <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Yes, you are welcome to watch the service being performed. Our technicians work transparently, and we believe in keeping you informed throughout the process. Your satisfaction and trust are our top priorities.</p>
              </div>
            </div>
             {/* FAQ Item 7 */}
            <div className="faq-item">
              <div className="faq-question">
                <span>Do you use OEM parts for repairs?</span>
                 <div className="faq-icon-wrapper">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Yes, we exclusively use OEM (Original Equipment Manufacturer) parts for all repairs to ensure the highest quality and perfect compatibility with your vehicle. This maintains your car’s performance, safety, and warranty standards.</p>
              </div>
            </div>
          </div>
          <div className="faq-cta-card">
            <div className="cta-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"></path></svg>
            </div>
            <h3 className="cta-card-title">Still Have Questions?</h3>
            <p className="cta-card-text">Our team is ready to assist you. Get in touch with our experts for personalized support and advice.</p>
            <a href="tel:+919999967591" className="cta-card-button">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function HomePage() {

  useEffect(() => {
    // All of the logic from your <script> tag goes here.
    const header = document.querySelector('.header') as HTMLElement;
    const carSelect = document.getElementById('car-select') as HTMLInputElement;
    const locationSelect = document.getElementById('location-select') as HTMLInputElement;
    const popupOverlay = document.getElementById('popup-overlay') as HTMLElement;
    
    // Advanced Car Selection Popups
    const manufacturerPopup = document.getElementById('manufacturer-popup') as HTMLElement;
    const modelPopup = document.getElementById('model-popup') as HTMLElement;
    const modelYearPopup = document.getElementById('model-year-popup') as HTMLElement;
    const fuelPopup = document.getElementById('fuel-popup') as HTMLElement;
    
    // Simple Popups
    const locationPopup = document.getElementById('location-selector-popup') as HTMLElement;
    const carSelectorPopup = document.getElementById('car-selector-popup') as HTMLElement;

    const manufacturerSearch = document.getElementById('manufacturer-search') as HTMLInputElement;
    const locationSearch = document.getElementById('location-search') as HTMLInputElement;
    const carSearch = document.getElementById('car-search') as HTMLInputElement;
    
    const backToManufacturerBtn = document.getElementById('back-to-manufacturer');
    const backToModelBtn = document.getElementById('back-to-model');
    const backToModelYearBtn = document.getElementById('back-to-model-year');
    
    const customForm = document.getElementById('CustomForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;

    const animatedTitle = document.getElementById('animated-title');
const quotes = [
    "Get Free Estimates",
    "Get Free Quotes",
    "Luxury Car Care",
    "Precision Service Guaranteed",
    "Your Car, Our Passion",
    // "Excellence In Motion"
];
let quoteIndex = 0;
let charIndex = 0;
let isDeleting = false;
 
const typeWriter = () => {
    // Ensure the element exists before running
    if (!animatedTitle) return;

    const currentQuote = quotes[quoteIndex];
    const typeSpeed = isDeleting ? 75 : 150; // Speed of typing/deleting

    // Logic to type or delete characters
    if (isDeleting) {
        // Deleting
        animatedTitle.textContent = currentQuote.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing
        animatedTitle.textContent = currentQuote.substring(0, charIndex + 1);
        charIndex++;
    }

    // Check if a quote is fully typed or fully deleted
    if (!isDeleting && charIndex === currentQuote.length) {
        // Pause at the end of the quote before deleting
        setTimeout(() => { isDeleting = true; }, 2000); // 2-second pause
    } else if (isDeleting && charIndex === 0) {
        // Move to the next quote after deleting
        isDeleting = false;
        quoteIndex = (quoteIndex + 1) % quotes.length;
        // Small pause before typing the next quote
        setTimeout(typeWriter, 500); // 0.5-second pause
        return; // Return to avoid calling the next timeout immediately
    }

    setTimeout(typeWriter, typeSpeed);
};

// Start the animation when the component mounts
typeWriter();
// END: New code for typewriter animation

const statCounters = document.querySelectorAll('.stat-count');
const animationDuration = 2000; // 2 seconds

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const targetVal = parseInt(el.dataset.val || '0', 10);
            let startTime: number | null = null;

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / animationDuration, 1);
                const currentVal = Math.floor(progress * targetVal);
                el.textContent = `${currentVal}+`;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    el.textContent = `${targetVal}+`; // Ensure it ends on the exact number
                }
            };
            
            window.requestAnimationFrame(step);
            observer.unobserve(el); // Animate only once
        }
    });
}, { threshold: 0.5 }); // Start animation when 50% of the element is visible

statCounters.forEach(counter => {
    counterObserver.observe(counter);
});


    const carModels = {
        "Aston Martin": [{"name":"Vantage","image":"https://onlybigcars.com/wp-content/uploads/2024/11/1.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}],
        "Audi": [{"name":"A4","image":"https://onlybigcars.com/wp-content/uploads/2024/11/1-1.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"A6","image":"https://onlybigcars.com/wp-content/uploads/2024/11/1-1.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"Q5","image":"https://onlybigcars.com/wp-content/uploads/2024/11/1-1.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]}],
        "BMW": [{"name":"3 Series","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"5 Series","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"X3","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]}],
        "Mercedes-Benz": [{"name":"C-Class","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"E-Class","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"GLC","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]}],
        "Porsche": [{"name":"911","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]},{"name":"Cayenne","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}],
        "Jaguar": [{"name":"XE","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"F-Pace","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]}],
        "Land Rover": [{"name":"Discovery","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"Range Rover","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]}],
        "Volvo": [{"name":"XC60","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]},{"name":"XC90","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Diesel"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/DIESEL.svg"}]}],
        "Tesla": [{"name":"Model S","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Electric"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]},{"name":"Model 3","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Electric"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}],
        "Lexus": [{"name":"IS","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]},{"name":"RX","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023","2022"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"},{"name":["Hybrid"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}],
        "Bentley": [{"name":"Continental","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}],
        "Rolls Royce": [{"name":"Ghost","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}],
        "Maserati": [{"name":"Ghibli","image":"https://onlybigcars.com/wp-content/uploads/2024/11/3-2.jpeg","years":["2024","2023"],"fuel":[{"name":["Petrol"],"image":"https://onlybigcars.com/wp-content/uploads/2024/11/PETROL.svg"}]}]
    };
    
    let selections = { manufacturer: '', model: '', year: '', fuel: '' };

    const openPopup = (popup: HTMLElement) => {
      if(popupOverlay) popupOverlay.style.display = 'block';
      if(popup) popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

    const closeAllPopups = () => {
      if(popupOverlay) popupOverlay.style.display = 'none';
      [manufacturerPopup, modelPopup, modelYearPopup, fuelPopup, locationPopup, carSelectorPopup].forEach(p => {
        if(p) p.style.display = 'none';
      });
      document.body.style.overflow = 'auto';
    };
    
    window.closeLocationPopup = closeAllPopups;
    window.closeCarPopup = closeAllPopups;

    const createOptionElement = (text: string, imgSrc?: string) => {
      const option = document.createElement('div');
      option.className = 'option';
      
      if (imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = text;
        img.onerror = () => { img.src = `https://via.placeholder.com/80x80/e53e3e/ffffff?text=${text.charAt(0)}`; };
        option.appendChild(img);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'brand-logo-placeholder';
        placeholder.textContent = text.length > 8 ? text.substring(0, 3).toUpperCase() : text.toUpperCase();
        option.appendChild(placeholder);
      }
      
      const div = document.createElement('div');
      div.textContent = text;
      option.appendChild(div);
      return option;
    };

    const populateManufacturers = (filter = '') => {
      if (!manufacturerPopup) return;
      const grid = manufacturerPopup.querySelector('.option-grid');
      if (!grid) return;
      grid.innerHTML = '';
      const filtered = Object.keys(carModels).filter(m => m.toLowerCase().includes(filter.toLowerCase()));
      filtered.forEach(manufacturer => {
        const option = createOptionElement(manufacturer);
        option.addEventListener('click', () => {
          selections.manufacturer = manufacturer;
          populateModels(manufacturer as keyof typeof carModels);
          manufacturerPopup.style.display = 'none';
          if(modelPopup) openPopup(modelPopup);
        });
        grid.appendChild(option);
      });
    };

    const populateModels = (manufacturer: keyof typeof carModels) => {
      if (!modelPopup) return;
      const grid = modelPopup.querySelector('#model-grid');
      if (!grid) return;
      grid.innerHTML = '';
      carModels[manufacturer].forEach(model => {
        const option = createOptionElement(model.name, model.image);
        option.addEventListener('click', () => {
          selections.model = model.name;
          populateYears(manufacturer, model.name);
          modelPopup.style.display = 'none';
          if(modelYearPopup) openPopup(modelYearPopup);
        });
        grid.appendChild(option);
      });
    };
    
    const populateYears = (manufacturer: keyof typeof carModels, modelName: string) => {
      if (!modelYearPopup) return;
      const grid = modelYearPopup.querySelector('#model-year-grid');
      if (!grid) return;
      grid.innerHTML = '';
      const modelData = carModels[manufacturer].find(m => m.name === modelName);
      if (!modelData) return;
      modelData.years.forEach(year => {
        const option = createOptionElement(year);
        option.addEventListener('click', () => {
          selections.year = year;
          populateFuelTypes(manufacturer, modelName);
          modelYearPopup.style.display = 'none';
          if(fuelPopup) openPopup(fuelPopup);
        });
        grid.appendChild(option);
      });
    };

    const populateFuelTypes = (manufacturer: keyof typeof carModels, modelName: string) => {
      if (!fuelPopup) return;
      const grid = fuelPopup.querySelector('#fuel-grid');
      if (!grid) return;
      grid.innerHTML = '';
      const modelData = carModels[manufacturer].find(m => m.name === modelName);
      if (!modelData) return;
      modelData.fuel.forEach(fuelData => {
        const fuelName = fuelData.name[0];
        const option = createOptionElement(fuelName, fuelData.image);
        option.addEventListener('click', () => {
          selections.fuel = fuelName;
          if (carSelect) {
            carSelect.value = `${selections.year} ${selections.manufacturer} ${selections.model} (${selections.fuel})`;
          }
          closeAllPopups();
        });
        grid.appendChild(option);
      });
    };
    
    window.filterLocations = () => {
        if (!locationPopup || !locationSearch) return;
        const searchTerm = locationSearch.value.toLowerCase();
        const options = locationPopup.querySelectorAll('.location-option');
        options.forEach(option => {
            const locationName = option.textContent?.toLowerCase() || '';
            const element = option as HTMLElement;
            if(locationName.includes(searchTerm)){
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    };
    
    window.filterCars = () => {
        if (!carSelectorPopup || !carSearch) return;
        const searchTerm = carSearch.value.toLowerCase();
        const options = carSelectorPopup.querySelectorAll('.car-brand-option');
        options.forEach(option => {
            const brandName = option.textContent?.toLowerCase() || '';
            const element = option as HTMLElement;
            if(brandName.includes(searchTerm)){
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    };

    window.selectLocation = (locationName: string) => {
      if (locationSelect) locationSelect.value = locationName;
      closeAllPopups();
    };

    const handleScroll = () => {
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    if (popupOverlay) {
      popupOverlay.addEventListener('click', closeAllPopups);
    }
    
    if (carSelect) {
      carSelect.addEventListener('click', () => { 
        populateManufacturers(); 
        if(manufacturerPopup) openPopup(manufacturerPopup); 
      });
    }
    
    if (locationSelect) {
      locationSelect.addEventListener('click', () => { 
        window.filterLocations();
        if(locationPopup) openPopup(locationPopup); 
      });
    }
    
    if (manufacturerSearch) {
      manufacturerSearch.addEventListener('input', (e) => populateManufacturers((e.target as HTMLInputElement).value));
    }
    
    if (backToManufacturerBtn) {
      backToManufacturerBtn.addEventListener('click', () => { 
        if(modelPopup) modelPopup.style.display = 'none'; 
        if(manufacturerPopup) openPopup(manufacturerPopup); 
      });
    }
    if (backToModelBtn) {
      backToModelBtn.addEventListener('click', () => { 
        if(modelYearPopup) modelYearPopup.style.display = 'none'; 
        if(modelPopup) openPopup(modelPopup); 
      });
    }
    if (backToModelYearBtn) {
      backToModelYearBtn.addEventListener('click', () => { 
        if(fuelPopup) fuelPopup.style.display = 'none'; 
        if(modelYearPopup) openPopup(modelYearPopup); 
      });
    }

    const handleFormSubmit = function(e: Event) {
      e.preventDefault();
      if (!locationSelect || !carSelect || !submitBtn || !customForm) return;
      const location = locationSelect.value;
      const car = carSelect.value;
      const phone = (document.getElementById('mob-number') as HTMLInputElement).value;
      
      if (!location) { alert('Please select a location'); return; }
      if (!car) { alert('Please select your car'); return; }
      if (!phone || phone.length !== 10) { alert('Please enter a valid 10-digit phone number'); return; }
      
      submitBtn.classList.add('loading');
      
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        alert(`Thank you! We'll contact you shortly.\n\nDetails:\nLocation: ${location}\nCar: ${car}\nPhone: ${phone}`);
        
        customForm.reset();
        selections = { manufacturer: '', model: '', year: '', fuel: '' };
      }, 2000);
    };

    if (customForm) {
      customForm.addEventListener('submit', handleFormSubmit);
    }

    window.scrollToServices = function() {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    window.scrollToHero = function() {
      document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' });
    };

    window.selectCar = function(carBrand: string) {
      if(carSelect) carSelect.value = carBrand;
      closeAllPopups();
    };

    // Testimonial Slider Logic
    // START: REVISED Testimonial Slider Logic with 3D Tilt
    const slider = document.querySelector('.testimonial-slider') as HTMLElement;
    const carousel = document.querySelector('.testimonial-carousel') as HTMLElement;
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn') as HTMLElement;
    const nextBtn = document.querySelector('.next-btn') as HTMLElement;
    let autoRotateInterval: NodeJS.Timeout | null = null;
    let activeCard: HTMLElement | null = null;

    // NEW: Function to handle the 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
        if (!activeCard) return;
        const cardContent = activeCard.querySelector('.testimonial-content') as HTMLElement;
        const { clientX, clientY } = e;
        const { left, top, width, height } = activeCard.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const rotateX = -1 * ((height / 2) - y) / 20; // Adjust divisor for sensitivity
        const rotateY = ((width / 2) - x) / 20; // Adjust divisor for sensitivity
        
        cardContent.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    // NEW: Function to reset the card when the mouse leaves
    const handleMouseLeave = () => {
        if (!activeCard) return;
        const cardContent = activeCard.querySelector('.testimonial-content') as HTMLElement;
        cardContent.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };
    
    if (carousel && cards.length > 0 && prevBtn && nextBtn && slider) {
        let currentIndex = 0;
        const totalCards = cards.length;
        const angle = 360 / totalCards;

        const updateCarousel = () => {
            const rotateY = -currentIndex * angle;
            carousel.style.transform = `translateZ(-288px) rotateY(${rotateY}deg)`;

            // Remove listeners from the old active card
            if (activeCard) {
                activeCard.removeEventListener('mousemove', handleMouseMove);
                activeCard.removeEventListener('mouseleave', handleMouseLeave);
            }

            cards.forEach((card, index) => {
                const cardEl = card as HTMLElement;
                const cardAngle = index * angle;
                cardEl.style.transform = `rotateY(${cardAngle}deg) translateZ(288px)`;
                
                if (index === currentIndex) {
                    cardEl.classList.add('active');
                    activeCard = cardEl; // Set the new active card
                    // Add listeners to the new active card
                    activeCard.addEventListener('mousemove', handleMouseMove);
                    activeCard.addEventListener('mouseleave', handleMouseLeave);
                } else {
                    cardEl.classList.remove('active');
                    // Ensure non-active cards are reset
                    const content = cardEl.querySelector('.testimonial-content') as HTMLElement;
                    if(content) content.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                }
            });
        };

        const handleNext = () => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        };

        const handlePrev = () => {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        };

        const startAutoRotate = () => {
            if (autoRotateInterval) clearInterval(autoRotateInterval);
            autoRotateInterval = setInterval(handleNext, 5000);
        };

        const stopAutoRotate = () => {
            if (autoRotateInterval) clearInterval(autoRotateInterval);
        };

        nextBtn.addEventListener('click', () => {
            handleNext();
            startAutoRotate();
        });
        prevBtn.addEventListener('click', () => {
            handlePrev();
            startAutoRotate();
        });

        slider.addEventListener('mouseenter', stopAutoRotate);
        slider.addEventListener('mouseleave', () => {
            handleMouseLeave(); // Also reset card on slider leave
            startAutoRotate();
        });
        
        updateCarousel();
        startAutoRotate();
    }
    // END: REVISED Testimonial Slider Logic with 3D Tilt
// START: CORRECTED FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        // Open the first FAQ item by default
        faqItems[0].classList.add('active');

        faqItems.forEach(item => {
            // FIX: The event listener is now on the entire question header.
            const questionHeader = item.querySelector('.faq-question') as HTMLElement;
            
            if (questionHeader) {
                questionHeader.addEventListener('click', () => {
                    // This allows only one item to be open at a time.
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    // Toggle the class on the parent item to trigger the animation
                    item.classList.toggle('active');
                });
            }
        });
    }
    // END: CORRECTED FAQ Accordion Logic
    
    // Cleanup function to remove event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (popupOverlay) popupOverlay.removeEventListener('click', closeAllPopups);
      if (customForm) customForm.removeEventListener('submit', handleFormSubmit);
      if (autoRotateInterval) clearInterval(autoRotateInterval);
    };

  }, []); // Empty dependency array means this effect runs once on mount.

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <Image src="https://onlybigcars.com/wp-content/uploads/2025/09/obc_loogbg.png" alt="Only Big Cars Logo" width={250} height={50} priority/>
            <span className="location-badge">📍 Faridabad</span>
          </div>
          <nav>
            <ul className="nav-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); window.scrollToServices(); }}>Services</a></li>
              <li><a href="#">Our Locations</a></li>
              <li><a href="#">Sell/Buy</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/assets/images/obc_home_indian.jpeg')`,
        }}
      >
        <div className="hero-container">
          <div className="service-card">
            <h2 className="card-title" id="animated-title">&nbsp;</h2>
            <p className="card-subtitle">Your Journey to Perfect Car Care Starts Here!</p>
            <form id="CustomForm">
              <div className="form-group">
                <input type="text" className="form-input custom-select" id="location-select" placeholder="Select Location" readOnly />
              </div>
              <div className="form-group">
                <input type="text" className="form-input custom-select" id="car-select" placeholder="Select Your Car" readOnly />
              </div>
              <div className="form-group">
                <input type="tel" className="form-input" id="mob-number" placeholder="Phone Number" pattern="[0-9]{10}" maxLength={10} required />
              </div>
              <button type="submit" className="cta-button" id="submitBtn">
                <span className="btn-text">Check Prices</span>
                <span className="spinner"></span>
              </button>
            </form>
            <div className="features">
              <div className="feature">
                <span className="star-rating">★</span>
                <span className="rating-text">4.0/5</span>
              </div>
              <div className="feature">
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Instant Quotes</span>
              </div>
              <div className="feature">
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m5.25 2.5a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
                </svg>
                <span>Certified Mechanics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* ============== START: DESKTOP SERVICES SECTION ============== */}
      {/* This section will ONLY be visible on screens wider than 768px */}
      {/* =================================================================== */}
      <section className="services-section desktop-only" id="services">
        <div className="banner-header">
  <div className="banner-content">
    <h2 className="section-title">
      Our <span>Services</span>
    </h2>
    
  </div>
</div>

        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="services-container">
          <div className="services-grid">
            {/* All 12 service items go here, same as before */}
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <h3 className="service-title">Car Services</h3>
              <p className="service-description">
                Comprehensive maintenance and repair services for all luxury car models with premium quality standards.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.5 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.4 1.39-1 1.73v7.27h-3v-7.27c-.6-.34-1-.99-1-1.73 0-1.38 1.12-2.5 2.5-2.5zm-9-4h17c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-17c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1zm0 16h17c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-17c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1z" />
                </svg>
              </div>
              <h3 className="service-title">AC Service & Repair</h3>
              <p className="service-description">
                Professional air conditioning maintenance, repair, and gas refilling for optimal cabin comfort year-round.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                </svg>
              </div>
              <h3 className="service-title">Complete Car Inspection</h3>
              <p className="service-description">
                Thorough 360-degree diagnostic inspection using advanced tools to ensure your vehicle&apos;s peak performance.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="service-title">Denting & Painting</h3>
              <p className="service-description">
                Expert bodywork restoration with precision denting removal and premium paint matching for flawless finish.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
                </svg>
              </div>
              <h3 className="service-title">Car Detailing</h3>
              <p className="service-description">
                Premium interior and exterior detailing services to restore your luxury vehicle to showroom condition.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h3 className="service-title">Brakes & Suspension</h3>
              <p className="service-description">
                Advanced brake system maintenance and suspension repairs for optimal safety and smooth driving experience.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                </svg>
              </div>
              <h3 className="service-title">Car Battery & Electricals</h3>
              <p className="service-description">
                Complete electrical system diagnostics, battery replacement, and wiring repairs for reliable performance.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                </svg>
              </div>
              <h3 className="service-title">Tyre & Wheel Care</h3>
              <p className="service-description">
                Professional tyre replacement, wheel alignment, balancing, and rotation services for enhanced safety and performance.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 20.42l-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z" />
                </svg>
              </div>
              <h3 className="service-title">Cleaning & Grooming</h3>
              <p className="service-description">
                Comprehensive interior and exterior cleaning services including steam cleaning, polishing, and protection treatments.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 9V7l-10-4-10 4v2c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12zM12 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V9.99l7-2.97v3.97z" />
                </svg>
              </div>
              <h3 className="service-title">Clutch & Body Parts</h3>
              <p className="service-description">
                Expert clutch repairs, transmission service, and genuine body parts replacement for optimal vehicle function.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V8.99l7-2.97v5.97z" />
                </svg>
              </div>
              <h3 className="service-title">Insurance & SOS Service</h3>
              <p className="service-description">
                24/7 emergency roadside assistance, insurance claim support, and instant help for unexpected breakdowns.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h3 className="service-title">Windshields & Lights</h3>
              <p className="service-description">
                Professional windshield repair and replacement, headlight restoration, and LED lighting upgrades for enhanced visibility and safety.
              </p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="services-cta">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Experience Excellence?</h3>
              <p className="cta-subtitle">
                Get instant quotes for premium car services and join thousands of satisfied customers.
              </p>
              <div className="cta-buttons">
                <a
                  href="#"
                  className="cta-btn cta-btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollToHero();
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h8V3h2v10h8l-9 9-9-9z" />
                  </svg>
                  Get Quote Now
                </a>
                <a href="tel:+919876543210" className="cta-btn cta-btn-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* ============== START: MOBILE SERVICES SECTION ============== */}
      {/* This section will ONLY be visible on screens smaller than 768px */}
      {/* =================================================================== */}
      <section className="mobile-services-section mobile-only">
         <div className="services-container">
            <div className="services-header">
               <div className="services-badge">Our Premium Services</div>
               <h2 className="services-title">All Services</h2>
            </div>
            <div className="mobile-services-grid">
               {/* Mobile Service Items (Icon and Title only) */}
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg></div>
                  <h3 className="mobile-service-title">Car Services</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.4 1.39-1 1.73v7.27h-3v-7.27c-.6-.34-1-.99-1-1.73 0-1.38 1.12-2.5 2.5-2.5zm-9-4h17c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-17c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1zm0 16h17c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-17c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1z" /></svg></div>
                  <h3 className="mobile-service-title">AC Service & Repair</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg></div>
                  <h3 className="mobile-service-title">Complete Inspection</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                  <h3 className="mobile-service-title">Denting & Painting</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg></div>
                  <h3 className="mobile-service-title">Car Detailing</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>
                  <h3 className="mobile-service-title">Brakes & Suspension</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg></div>
                  <h3 className="mobile-service-title">Battery & Electricals</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg></div>
                  <h3 className="mobile-service-title">Tyre & Wheel Care</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 20.42l-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z"/></svg></div>
                  <h3 className="mobile-service-title">Cleaning & Grooming</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 9V7l-10-4-10 4v2c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12zM12 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V9.99l7-2.97v3.97z"/></svg></div>
                  <h3 className="mobile-service-title">Clutch & Body Parts</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V8.99l7-2.97v5.97z"/></svg></div>
                  <h3 className="mobile-service-title">Insurance & SOS</h3>
               </div>
               <div className="mobile-service-item">
                  <div className="mobile-service-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>
                  <h3 className="mobile-service-title">Windshields & Lights</h3>
               </div>
            </div>
         </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        {/* NEW: Banner header for About */}
        <div className="banner-header">
          <div className="banner-content">
            <h2 className="section-title">About <span>OnlyBigCars</span></h2>
          </div>
        </div>

        <div className="about-container">
          {/* removed old .about-header */}
          {/* Intro text moved below banner */}
          <p className="about-description">
            At Onlybigcars, we understand the importance of your time, which is why we offer convenient online booking and flexible service options. Our goal is to make your experience seamless and stress-free, so you can focus on what matters most – the road ahead!
          </p>

          
          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                </svg>
              </div>
              <div className="about-feature-content">
                <h3>Comprehensive Car Repair</h3>
                <p>Expert diagnosis and repair services for all vehicle systems using advanced diagnostic equipment.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 4.83L9.19 11.63l-4.92.71 3.56 3.47-.84 4.91L12 18.18l5.01 2.54-.84-4.91 3.56-3.47-4.92-.71L12 6.83z"/>
                </svg>
              </div>
              <div className="about-feature-content">
                <h3>Routine Maintenance</h3>
                <p>Scheduled servicing to keep your vehicle in peak condition and prevent costly breakdowns.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                </svg>
              </div>
              <div className="about-feature-content">
                <h3>Detailed Car Cleaning and Detailing</h3>
                <p>Premium cleaning services to restore your vehicle's appearance inside and out.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="about-feature-content">
                <h3>Brake Inspection and Repairs</h3>
                <p>Comprehensive brake system checks and repairs to ensure your safety on the road.</p>
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <h3 className="about-cta-title">Experience the Difference</h3>
            <p className="about-cta-subtitle">Join thousands of satisfied customers who trust us with their luxury vehicles.</p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="stat-number stat-count" data-val="5000">0+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="about-stat">
                <span className="stat-number stat-count" data-val="10">0+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="stat-number stat-count" data-val="50">0+</span>
                <span className="stat-label">Expert Technicians</span>
              </div>
            </div>
            <a href="#" className="about-btn" onClick={(e) => { e.preventDefault(); window.scrollToHero(); }}>
              Book Your Service Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="booking-process-section" id="booking-process">
        <div className="booking-container">
          <div className="booking-header">
            <h2 className="booking-title">How To Book Our Service</h2>
            <p className="booking-subtitle">These few steps will help return your car to a working condition</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3>Choose YOUR SERVICE</h3>
                <p>Select from our comprehensive range of premium car services tailored to your vehicle's specific needs and requirements.</p>
              </div>
              <div className="step-connector"></div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3>Make an APPOINTMENT</h3>
                <p>Book your preferred time slot through our easy online booking system or call our customer service for immediate assistance.</p>
              </div>
              <div className="step-connector"></div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3>Service at your DOORSTEP/WORKSHOP</h3>
                <p>Enjoy the convenience of doorstep service or visit our state-of-the-art workshop for comprehensive car care solutions.</p>
              </div>
              <div className="step-connector"></div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-2H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3>PICK UP your car keys</h3>
                <p>Collect your fully serviced vehicle with complete satisfaction guarantee and detailed service report for your records.</p>
              </div>
            </div>
          </div>
          
          <div className="booking-cta">
            <h3>Ready to Get Started?</h3>
            <p>Begin your premium car service journey with just a few clicks</p>
            <a href="#" className="process-cta-btn" onClick={(e) => { e.preventDefault(); window.scrollToHero(); }}>
              Start Booking Process
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <Faq />

      <NewsUpdatesSection />

      {/* Popup Overlays */}
      <div className="popup-overlay" id="popup-overlay"></div>
      
      {/* Location Selector Popup */}
      <div className="location-selector-popup" id="location-selector-popup">
          <button className="popup-back-btn" onClick={() => window.closeLocationPopup()}>← Back</button>
          <h3>Select Your Location</h3>
          <input type="text" className="search-input" id="location-search" placeholder="Search locations..." onKeyUp={() => window.filterLocations()}/>
          <div className="location-grid" id="location-grid">
              <div className="location-option" onClick={() => window.selectLocation('Ghaziabad')}>
                  <img src="https://onlybigcars.com/wp-content/uploads/2025/04/urban-scaled.jpg" alt="Ghaziabad"/>
                  <span>Ghaziabad</span>
              </div>
              <div className="location-option" onClick={() => window.selectLocation('Delhi')}>
                  <img src="https://onlybigcars.com/wp-content/uploads/2024/12/10-City-Monument-Icons-Sketch-Freebie-16-e1733222735926.jpeg" alt="Delhi"/>
                  <span>Delhi</span>
              </div>
              <div className="location-option" onClick={() => window.selectLocation('Noida')}>
                  <img src="https://onlybigcars.com/wp-content/uploads/2025/04/noida_city-e1743486704534.jpg" alt="Noida"/>
                  <span>Noida</span>
              </div>
              <div className="location-option" onClick={() => window.selectLocation('Gurugram')}>
                  <img src="https://onlybigcars.com/wp-content/uploads/2024/12/building-1.png" alt="Gurugram"/>
                  <span>Gurugram</span>
              </div>
              <div className="location-option" onClick={() => window.selectLocation('Faridabad')}>
                  <img src="https://onlybigcars.com/wp-content/uploads/2024/12/the-taj-mahal-in-india-free-vector.jpg" alt="Faridabad"/>
                  <span>Faridabad</span>
              </div>
              <div className="location-option" onClick={() => window.selectLocation('Rohtak')}>
                  <img src="https://onlybigcars.com/wp-content/uploads/2025/04/city-scaled.jpg" alt="Rohtak"/>
                  <span>Rohtak</span>
              </div>
          </div>
      </div>

      {/* Car Selector Popup */}
      <div className="selector-popup" id="car-selector-popup">
          <button className="popup-back-btn" onClick={() => window.closeCarPopup()}>← Back</button>
          <h3>Select Your Car</h3>
          <input type="text" className="search-input" id="car-search" placeholder="Search car brands..." onKeyUp={() => window.filterCars()}/>
          <div className="option-grid" id="car-option-grid">
              <div className="option car-brand-option" onClick={() => window.selectCar('BMW')}><div className="brand-logo-placeholder">BMW</div><span>BMW</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Mercedes-Benz')}><div className="brand-logo-placeholder">MB</div><span>Mercedes-Benz</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Audi')}><div className="brand-logo-placeholder">AUDI</div><span>Audi</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Porsche')}><div className="brand-logo-placeholder">POR</div><span>Porsche</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Jaguar')}><div className="brand-logo-placeholder">JAG</div><span>Jaguar</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Land Rover')}><div className="brand-logo-placeholder">LR</div><span>Land Rover</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Volvo')}><div className="brand-logo-placeholder">VOL</div><span>Volvo</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Lexus')}><div className="brand-logo-placeholder">LEX</div><span>Lexus</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Tesla')}><div className="brand-logo-placeholder">TES</div><span>Tesla</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Bentley')}><div className="brand-logo-placeholder">BEN</div><span>Bentley</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Rolls Royce')}><div className="brand-logo-placeholder">RR</div><span>Rolls Royce</span></div>
              <div className="option car-brand-option" onClick={() => window.selectCar('Maserati')}><div className="brand-logo-placeholder">MAS</div><span>Maserati</span></div>
          </div>
      </div>
      
      {/* Advanced Car Selection Popups */}
      <div className="selector-popup" id="manufacturer-popup">
        <input type="text" id="manufacturer-search" placeholder="Search car brand..." className="search-input" />
        <div className="option-grid"></div>
      </div>

      <div className="selector-popup" id="model-popup">
        <button className="popup-back-btn" id="back-to-manufacturer">← Back</button>
        <div className="option-grid" id="model-grid"></div>
      </div>

      <div className="selector-popup" id="model-year-popup">
        <button className="popup-back-btn" id="back-to-model">← Back</button>
        <div className="option-grid" id="model-year-grid"></div>
      </div>

      <div className="selector-popup" id="fuel-popup">
        <button className="popup-back-btn" id="back-to-model-year">← Back</button>
        <div className="option-grid" id="fuel-grid"></div>
      </div>
      
      {/* Footer */}
      <footer style={{ background: '#1a1a1a', color: 'white', padding: '60px 0 20px', marginTop: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Image src="https://onlybigcars.com/wp-content/uploads/2025/09/obc_loogbg.png" alt="Only Big Cars Logo" width={250} height={50} style={{ marginRight: '10px', marginLeft:'-15px' }} />
                {/* <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Only Big Cars</span> */}
              </div>
              <p style={{ color: '#b0b0b0', lineHeight: 1.6, marginBottom: '20px' }}>
                Premium car service center in Ghaziabad specializing in luxury vehicles. Expert care for BMW, Audi, Mercedes-Benz, and more.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#" aria-label="Facebook" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#e53e3e'} onMouseOut={e => e.currentTarget.style.color='#b0b0b0'}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#e53e3e'} onMouseOut={e => e.currentTarget.style.color='#b0b0b0'}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0 1.802c-3.14 0-3.523.012-4.75.07-2.755.126-3.922 1.293-4.048 4.048-.058 1.226-.069 1.595-.069 4.75s.011 3.523.069 4.75c.126 2.755 1.293 3.922 4.048 4.048 1.227.058 1.61.069 4.75.069s3.523-.011 4.75-.069c2.755-.126 3.922-1.293 4.048-4.048.058-1.227.069-1.595.069-4.75s-.011-3.523-.069-4.75c-.126-2.755-1.293-3.922-4.048-4.048-1.227-.058-1.61-.069-4.75-.069zm0 4.638c-2.403 0-4.362 1.959-4.362 4.362s1.959 4.362 4.362 4.362 4.362-1.959 4.362-4.362-1.959-4.362-4.362-4.362zm0 7.162c-1.548 0-2.8-1.252-2.8-2.8s1.252-2.8 2.8-2.8 2.8 1.252 2.8 2.8-1.252 2.8-2.8 2.8zm4.965-7.825c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#e53e3e'} onMouseOut={e => e.currentTarget.style.color='#b0b0b0'}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#e53e3e'} onMouseOut={e => e.currentTarget.style.color='#b0b0b0'}><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-links-services">
              <div>
                <h4 style={{ marginBottom: '20px', color: '#e53e3e' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Home</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#services" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Services</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>About Us</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Contact</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', color: '#e53e3e' }}>Our Services</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Car Servicing</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>AC Repair</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Denting & Painting</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Car Detailing</a></li>
                  <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Insurance Claims</a></li>
                </ul>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '20px', color: '#e53e3e' }}>Contact Info</h4>
              <div style={{ color: '#b0b0b0', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '10px' }}>📍 Faridabad, Haryana</p>
                <p style={{ marginBottom: '10px' }}>📞 +91 98765 43210</p>
                <p style={{ marginBottom: '10px' }}>✉️ info@onlybigcars.com</p>
                <p style={{ marginBottom: '10px' }}>🕒 Mon-Sun: 9 AM - 8 PM</p>
              </div>
            </div>
          
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', color: '#666' }}>
            <p>&copy; 2025 Only Big Cars. All rights reserved. | <a href="#" style={{ color: '#e53e3e', textDecoration: 'none' }}>Privacy Policy</a> | <a href="#" style={{ color: '#e53e3e', textDecoration: 'none' }}>Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}