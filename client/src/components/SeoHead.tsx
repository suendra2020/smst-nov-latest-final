import React, { useEffect } from 'react';
import { useLocation } from 'wouter';

// Define a map for page-specific SEO data
const seoDataMap: { [key: string]: { title: string; description: string } } = {
  '/': {
    title: 'SMST - Secure, Modern, and Trusted Spiritual Platform',
    description: 'Welcome to SMST, your secure source for spiritual and educational content. Explore books, saints, and satsang with enhanced SSL security and search engine optimization.',
  },
  '/books': {
    title: 'SMST - Spiritual Books and Literature',
    description: 'Browse our collection of spiritual books and literature. Secure access to knowledge with SMST\'s SSL security.',
  },
  '/saints': {
    title: 'SMST - Lives and Teachings of Saints',
    description: 'Learn about the lives and teachings of various saints. A trusted and secure resource provided by SMST.',
  },
  '/satsang': {
    title: 'SMST - Satsang and Discourses',
    description: 'Access the latest satsang and spiritual discourses. Secure streaming and content delivery with SMST.',
  },
  '/about': {
    title: 'SMST - About Us',
    description: 'Learn more about the mission and vision of SMST. Committed to providing secure and optimized spiritual content.',
  },
  '/contact': {
    title: 'SMST - Contact Us',
    description: 'Get in touch with the SMST team. We value your feedback and inquiries.',
  },
  // Add more routes as needed
};

// Default SEO data for pages not explicitly mapped (e.g., 404)
const defaultSeo = {
  title: 'SMST - Secure Spiritual Platform',
  description: 'SMST - Secure, Modern, and Trusted platform for spiritual and educational content.',
};

interface SeoHeadProps {
  // Optional prop to override the default title/description for a specific component
  pageTitle?: string;
  pageDescription?: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ pageTitle, pageDescription }) => {
  const [location] = useLocation();
  const path = location.split('?')[0]; // Ignore query parameters for path matching

  const seo = seoDataMap[path] || defaultSeo;
  const title = pageTitle || seo.title;
  const description = pageDescription || seo.description;

  useEffect(() => {
    // Update the document title
    document.title = title;

    // Update the meta description tag
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);

    // Clean up function (optional for this case, but good practice)
    return () => {
      // You might want to reset to a default title/description on unmount
      // but since this is used in the layout, it will always be mounted.
    };
  }, [title, description]);

  return null; // This component does not render any visible UI
};

export default SeoHead;
