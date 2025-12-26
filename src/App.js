import React from 'react';
import "./index.css";


import RentalUnit from './components/rentalUnit';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  const rentalUnits = [
    {
      mainImage: "https://storage.googleapis.com/rento-scanner-public-assets/img001.jpeg",
      thumbnails: [
        "https://storage.googleapis.com/rento-scanner-public-assets/img001.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img002.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img003.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img004.jpeg",
      ],
      title: "Beautiful 3-Bedroom House",
      location: "123 Elm Street, Springfield",
      price: "$2,000/month",
      description: "This is a beautiful 3-bedroom house located in a quiet neighborhood. It features a large living room, a modern kitchen, and a spacious backyard perfect for family gatherings.",
      contact: {
        phone: "123-456-7890",
        email: "owner@example.com"
      }
    },
    {
      mainImage: "https://storage.googleapis.com/rento-scanner-public-assets/img005.jpeg",
      thumbnails: [
        "https://storage.googleapis.com/rento-scanner-public-assets/img005.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img006.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img007.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img008.jpeg",
      ],
      title: "Self contained-single rooms",
      location: "456 Oak Street, Springfield",
      price: "$1,500/month",
      description: "This 2-bedroom apartment offers modern amenities, with a spacious living area, new appliances, and great access to public transportation.",
      contact: {
        phone: "987-654-3210",
        email: "apartmentowner@example.com"
      }
    },
    {
      mainImage: "https://storage.googleapis.com/rento-scanner-public-assets/img012.jpeg",
      thumbnails: [
        "https://storage.googleapis.com/rento-scanner-public-assets/img009.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img010.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img011.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img012.jpeg",
      ],
      title: "Beautiful 3-Bedroom House",
      location: "123 Elm Street, Springfield",
      price: "$2,000/month",
      description: "This is a beautiful 3-bedroom house located in a quiet neighborhood. It features a large living room, a modern kitchen, and a spacious backyard perfect for family gatherings.",
      contact: {
        phone: "123-456-7890",
        email: "owner@example.com"
      }
    },
    {
      mainImage: "https://storage.googleapis.com/rento-scanner-public-assets/img016.jpeg",
      thumbnails: [
        "https://storage.googleapis.com/rento-scanner-public-assets/img013.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img015.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img016.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img017.jpeg",
      ],
      title: "Modern 2-Bedroom Apartment",
      location: "456 Oak Street, Springfield",
      price: "$1,500/month",
      description: "This 2-bedroom apartment offers modern amenities, with a spacious living area, new appliances, and great access to public transportation.",
      contact: {
        phone: "987-654-3210",
        email: "apartmentowner@example.com"
      }
    },
    {
      mainImage: "https://storage.googleapis.com/rento-scanner-public-assets/img021.jpeg",
      thumbnails: [
        "https://storage.googleapis.com/rento-scanner-public-assets/img018.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img019.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img020.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img021.jpeg",
      ],
      title: "Beautiful 3-Bedroom House",
      location: "123 Elm Street, Springfield",
      price: "$2,000/month",
      description: "This is a beautiful 3-bedroom house located in a quiet neighborhood. It features a large living room, a modern kitchen, and a spacious backyard perfect for family gatherings.",
      contact: {
        phone: "123-456-7890",
        email: "owner@example.com"
      }
    },
    {
      mainImage: "https://storage.googleapis.com/rento-scanner-public-assets/img019.jpeg",
      thumbnails: [
        "https://storage.googleapis.com/rento-scanner-public-assets/img018.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img019.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img020.jpeg",
        "https://storage.googleapis.com/rento-scanner-public-assets/img021.jpeg",
      ],
      title: "Modern 2-Bedroom Apartment",
      location: "456 Oak Street, Springfield",
      price: "$1,500/month",
      description: "This 2-bedroom apartment offers modern amenities, with a spacious living area, new appliances, and great access to public transportation.",
      contact: {
        phone: "987-654-3210",
        email: "apartmentowner@example.com"
      }
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <section className="bg-gradient-to-b from-lime-100 to-lime-200 py-8">
        <div className="w-full px-[5%]">
          {/* Grid for RentalUnit components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rentalUnits.map((unit, index) => (
              <RentalUnit key={index} unit={unit} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
