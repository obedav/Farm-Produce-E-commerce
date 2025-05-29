// src/app/farmers/page.tsx
import Link from 'next/link';

export default function FarmersPage() {
  // In a real app, this would come from your API
  const farmers = [
    {
      id: 1,
      name: 'Green Valley Farm',
      location: 'Harvest Valley, 25 miles from city center',
      established: 2005,
      specialty: 'Organic Vegetables',
      description: 'A family-run operation dedicated to growing pesticide-free produce using traditional methods combined with modern sustainable practices.',
      products: [
        'Tomatoes', 'Peppers', 'Cucumbers', 'Lettuce', 'Kale'
      ],
      certifications: ['Certified Organic', 'Sustainable Farming Certified'],
      imageUrl: '/green-valley-farm.jpg'
    },
    {
      id: 2,
      name: 'Sunshine Organics',
      location: 'Sunny Plains, 15 miles from city center',
      established: 2012,
      specialty: 'Fruits & Berries',
      description: 'Founded by two former agricultural scientists who wanted to grow food the way nature intended, with a focus on biodiversity and soil health.',
      products: [
        'Strawberries', 'Blueberries', 'Apples', 'Pears', 'Peaches'
      ],
      certifications: ['Certified Organic', 'Non-GMO Verified'],
      imageUrl: '/sunshine-organics.jpg'
    },
    {
      id: 3,
      name: 'Happy Hen Farm',
      location: 'Rolling Hills, 30 miles from city center',
      established: 2008,
      specialty: 'Free-Range Eggs & Poultry',
      description: 'Our hens roam freely on pasture, resulting in eggs with superior flavor and nutrition. We believe happy animals produce better food.',
      products: [
        'Eggs', 'Chicken', 'Turkey', 'Duck Eggs'
      ],
      certifications: ['Certified Humane', 'Animal Welfare Approved'],
      imageUrl: '/happy-hen-farm.jpg'
    },
    {
      id: 4,
      name: 'River Creek Gardens',
      location: 'Riverside County, 20 miles from city center',
      established: 2010,
      specialty: 'Heirloom Vegetables',
      description: 'Specializing in rare and heirloom varieties, we preserve agricultural heritage while providing unique and flavorful produce.',
      products: [
        'Heirloom Tomatoes', 'Rainbow Carrots', 'Purple Potatoes', 'Specialty Greens'
      ],
      certifications: ['Naturally Grown', 'Seed Saver Partner'],
      imageUrl: '/river-creek-gardens.jpg'
    },
    {
      id: 5,
      name: 'Meadow Dairy',
      location: 'Green Pastures, 35 miles from city center',
      established: 2007,
      specialty: 'Grass-Fed Dairy',
      description: 'Our cows graze on lush pastures year-round, producing milk that\'s turned into delicious, nutritious dairy products using traditional methods.',
      products: [
        'Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream'
      ],
      certifications: ['Grass-Fed Certified', 'Animal Welfare Approved'],
      imageUrl: '/meadow-dairy.jpg'
    },
    {
      id: 6,
      name: 'Berry Good Farm',
      location: 'Hillside Valley, 18 miles from city center',
      established: 2015,
      specialty: 'Organic Berries',
      description: 'We grow a wide variety of berries without synthetic pesticides or fertilizers, focusing on flavor and nutritional value above all.',
      products: [
        'Strawberries', 'Raspberries', 'Blackberries', 'Blueberries', 'Elderberries'
      ],
      certifications: ['Certified Organic', 'Bee-Friendly Farming'],
      imageUrl: '/berry-good-farm.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Meet Our Farmers</h1>
      <p className="text-lg text-gray-600 mb-8">
        We partner with local farmers committed to sustainable and ethical farming practices. Get to know the people behind your food.
      </p>
      
      {/* Featured farmer */}
      <div className="bg-green-50 rounded-lg p-6 mb-10 border border-green-200">
        <div className="md:flex">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-green-100 h-60 rounded-lg flex items-center justify-center">
              <span className="text-green-800/30 text-xl font-bold">
                Farmer Image
              </span>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-2">
              Featured Producer
            </span>
            <h2 className="text-2xl font-bold mb-2">{farmers[0].name}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {farmers[0].location} • Established {farmers[0].established}
            </p>
            <p className="text-gray-700 mb-4">
              {farmers[0].description}
            </p>
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-1">Specialty</h3>
              <p className="text-gray-600">{farmers[0].specialty}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-1">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {farmers[0].certifications.map((cert, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-white border border-green-200 text-green-800 text-xs px-2 py-1 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <Link 
              href={`/farmers/${farmers[0].id}`}
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              View Farm Profile
            </Link>
          </div>
        </div>
      </div>
      
      {/* All farmers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farmers.slice(1).map(farmer => (
          <div key={farmer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <span className="text-green-800/30 text-xl font-bold">
                {farmer.name} Image
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{farmer.name}</h2>
              <p className="text-sm text-gray-500 mb-3">
                {farmer.location}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {farmer.description}
              </p>
              <div className="mb-4">
                <h3 className="font-medium text-gray-900 mb-1">Specialty</h3>
                <p className="text-gray-600">{farmer.specialty}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {farmer.certifications.map((cert, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-green-50 border border-green-200 text-green-800 text-xs px-2 py-1 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <Link 
                href={`/farmers/${farmer.id}`}
                className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                View Farm Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}