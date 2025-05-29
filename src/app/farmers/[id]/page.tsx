// src/app/farmers/[id]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Get farmer data by ID (in a real app, this would come from your API)
const getFarmer = (id: string) => {
  const farmers = [
    {
      id: 1,
      name: 'Green Valley Farm',
      location: 'Harvest Valley, 25 miles from city center',
      established: 2005,
      specialty: 'Organic Vegetables',
      description: 'A family-run operation dedicated to growing pesticide-free produce using traditional methods combined with modern sustainable practices.',
      fullDescription: `
        Green Valley Farm has been a staple in the local agricultural community since 2005. What started as a small 5-acre plot has grown into a thriving 30-acre farm that supplies fresh, organic vegetables to the region.
        
        Our farming philosophy centers around working with nature, not against it. We use companion planting, crop rotation, and natural pest management to create a balanced ecosystem that produces healthy, nutritious food.
        
        The farm is run by the Johnson family - Mark and Sarah, along with their two children, Emma and Ethan, who are learning the family trade and bringing new sustainable innovations to the farm.
        
        All of our produce is grown without synthetic pesticides or fertilizers. We use only organic compost and natural minerals to feed our soil, which in turn produces vegetables with exceptional flavor and nutrition.
      `,
      products: [
        'Tomatoes', 'Peppers', 'Cucumbers', 'Lettuce', 'Kale', 'Carrots', 'Beets', 'Radishes', 'Spinach', 'Swiss Chard'
      ],
      certifications: ['Certified Organic', 'Sustainable Farming Certified'],
      methods: [
        'Crop Rotation',
        'Companion Planting',
        'Natural Pest Management',
        'Water Conservation',
        'Soil Health Management'
      ],
      seasonalCalendar: {
        spring: ['Lettuce', 'Spinach', 'Kale', 'Radishes', 'Beets'],
        summer: ['Tomatoes', 'Peppers', 'Cucumbers', 'Zucchini', 'Eggplant'],
        fall: ['Carrots', 'Sweet Potatoes', 'Winter Squash', 'Brussels Sprouts', 'Cabbage'],
        winter: ['Kale', 'Collards', 'Winter Squash', 'Stored Root Vegetables']
      },
      images: [
        '/green-valley-farm-1.jpg',
        '/green-valley-farm-2.jpg',
        '/green-valley-farm-3.jpg'
      ],
      story: `
        Green Valley Farm began in 2005 when Mark Johnson decided to leave his corporate job to pursue his passion for sustainable agriculture. With a background in environmental science and a love for growing food, Mark purchased a small plot of land in Harvest Valley.
        
        In the early years, the farm focused primarily on selling at local farmers markets. Word spread about the exceptional quality and flavor of their produce, and soon local restaurants began to take notice.
        
        Sarah joined the operation full-time in 2010, bringing her expertise in business management and marketing. Under their joint leadership, the farm expanded its acreage and began to offer CSA (Community Supported Agriculture) subscriptions.
        
        Today, Green Valley Farm is known throughout the region for its commitment to organic practices and community involvement. They host seasonal farm tours, educational workshops, and farm-to-table dinner events that connect consumers directly with where their food comes from.
        
        The next generation of farmers is already involved, with Emma studying agricultural science and Ethan developing new technology systems for the farm's operations. The Johnson family is committed to preserving the farm for generations to come.
      `,
      contactInfo: {
        email: 'info@greenvalleyfarm.com',
        phone: '(555) 123-4567',
        socialMedia: {
          facebook: 'facebook.com/greenvalleyfarm',
          instagram: 'instagram.com/greenvalleyfarm'
        }
      },
      farmEvents: [
        {
          name: 'Spring Planting Festival',
          date: 'April 15, 2025',
          description: 'Join us for the kickoff of our growing season with tours, workshops, and plant sales.'
        },
        {
          name: 'Summer Farm-to-Table Dinner',
          date: 'July 20, 2025',
          description: 'A magical evening dining in the fields with food prepared by local chefs using our produce.'
        },
        {
          name: 'Fall Harvest Celebration',
          date: 'October 5, 2025',
          description: 'Pumpkin picking, hayrides, and seasonal treats to celebrate the autumn harvest.'
        }
      ],
      imageUrl: '/green-valley-farm.jpg'
    }
    // Other farmers would be listed here
  ];
  
  const farmer = farmers.find(f => f.id === parseInt(id));
  if (!farmer) return null;
  return farmer;
};

export default function FarmerPage({ params }: { params: { id: string } }) {
  const farmer = getFarmer(params.id);
  
  if (!farmer) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/farmers" className="text-[var(--primary)] hover:text-[var(--primary-dark)] flex items-center">
          &larr; All Farmers
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="h-80 bg-[var(--primary-light)] flex items-center justify-center relative">
          <span className="text-[var(--primary-dark)]/30 text-2xl font-bold">
            {farmer.name} Banner Image
          </span>
          <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white">{farmer.name}</h1>
            <p className="text-white/90">{farmer.specialty}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">About Our Farm</h2>
                <div className="prose max-w-none">
                  {farmer.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-[var(--text-light)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Our Story</h2>
                <div className="prose max-w-none">
                  {farmer.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-[var(--text-light)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Farming Practices</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {farmer.methods.map((method, index) => (
                    <li key={index} className="flex items-center text-[var(--text-light)]">
                      <span className="mr-2 text-[var(--primary)]">✓</span>
                      {method}
                    </li>
                  ))}
                </ul>
                <p className="text-[var(--text-light)]">
                  At {farmer.name}, we are committed to sustainable farming methods that prioritize soil health, water conservation, and biodiversity. Our farming practices are designed to produce nutritious food while minimizing environmental impact.
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Seasonal Calendar</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-[var(--primary-light)] p-4 rounded-lg">
                    <h3 className="font-medium text-[var(--primary-dark)] mb-2">Spring</h3>
                    <ul className="text-[var(--text-light)] space-y-1">
                      {farmer.seasonalCalendar.spring.map((crop, index) => (
                        <li key={index}>{crop}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[var(--sun-yellow-light)] p-4 rounded-lg">
                    <h3 className="font-medium text-[var(--sun-yellow)] mb-2">Summer</h3>
                    <ul className="text-[var(--text-light)] space-y-1">
                      {farmer.seasonalCalendar.summer.map((crop, index) => (
                        <li key={index}>{crop}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[var(--earth-light)] p-4 rounded-lg">
                    <h3 className="font-medium text-[var(--earth)] mb-2">Fall</h3>
                    <ul className="text-[var(--text-light)] space-y-1">
                      {farmer.seasonalCalendar.fall.map((crop, index) => (
                        <li key={index}>{crop}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[var(--accent-light)] p-4 rounded-lg">
                    <h3 className="font-medium text-[var(--secondary)] mb-2">Winter</h3>
                    <ul className="text-[var(--text-light)] space-y-1">
                      {farmer.seasonalCalendar.winter.map((crop, index) => (
                        <li key={index}>{crop}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Upcoming Farm Events</h2>
                <div className="space-y-4">
                  {farmer.farmEvents.map((event, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-[var(--text)]">{event.name}</h3>
                      <p className="text-[var(--primary)]">{event.date}</p>
                      <p className="text-[var(--text-light)] mt-2">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-[var(--primary-light)] p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Farm Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Location</h3>
                    <p className="text-[var(--text-light)]">{farmer.location}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Established</h3>
                    <p className="text-[var(--text-light)]">{farmer.established}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {farmer.certifications.map((cert, index) => (
                        <span 
                          key={index} 
                          className="inline-block bg-white border border-[var(--primary-light)] text-[var(--primary-dark)] text-xs px-2 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Products</h3>
                    <div className="flex flex-wrap gap-2">
                      {farmer.products.map((product, index) => (
                        <Link 
                          key={index}
                          href={`/products?search=${product}`}
                          className="inline-block bg-white border border-[var(--primary-light)] hover:bg-[var(--primary-light)] text-[var(--primary-dark)] text-xs px-2 py-1 rounded-full"
                        >
                          {product}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Email</h3>
                    <a href={`mailto:${farmer.contactInfo.email}`} className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                      {farmer.contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Phone</h3>
                    <a href={`tel:${farmer.contactInfo.phone}`} className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                      {farmer.contactInfo.phone}
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">Social Media</h3>
                    <div className="flex space-x-4">
                      <a href={`https://${farmer.contactInfo.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                        Facebook
                      </a>
                      <a href={`https://${farmer.contactInfo.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--accent)]/80">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  href={`/products?farmer=${farmer.id}`}
                  className="btn-primary inline-block w-full px-6 py-3"
                >
                  Shop {farmer.name} Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text)]">Farm Gallery</h2>
        </div>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-[var(--primary-light)] h-60 rounded-lg flex items-center justify-center">
            <span className="text-[var(--primary-dark)]/30 text-xl font-bold">
              Farm Image {index + 1}
            </span>
          </div>
        ))}
      </div>
      
      <div className="bg-[var(--primary-light)] rounded-lg p-6 border border-[var(--primary-light)]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">Meet More of Our Farmers</h2>
        <p className="text-[var(--text-light)] mb-6">
          We partner with many local, sustainable farmers who share our values of quality, freshness, and environmental stewardship.
        </p>
        <Link
          href="/farmers"
          className="btn-primary inline-block px-6 py-3"
        >
          View All Farmers
        </Link>
      </div>
    </div>
  );
}