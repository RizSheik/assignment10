import Navbar from './components/Navbar'
import Card from './components/card'
import Link from 'next/link'

const cardData = [
  { 
    title: "Lenovo ThinkPad T14 Gen 4,", 
    content: "The Lenovo ThinkPad T14 Gen 4, 14-Inch Touchscreen, AMD Ryzen 7 Pro 7840U, 16GB Ram 512GB SSD (21K30006US) - Thunder Black", 
    imageUrl: "/image/image1.jpg"
  },
  { 
    title: "Acer Predator Helios Neo 16 ", 
    content: "The Acer Predator Helios Neo 16 Gaming Laptop Intel Core i9 14th Gen 16GB RAM 1TB SSD Graphics NVIDIA Ge", 
    imageUrl: "/image/image2.jpg", 
  },
  { 
    title: "HP Gaming Laptop 16.1 Inch", 
    content: "The HP Gaming Laptop 16.1 Inch AMD RYZEN 5 8GB RAM 512GB SSD Graphics Card Ram Size 4GB ", 
    imageUrl: "/image/image3.jpg"
  },
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Laptops to Elevate Your Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              content={card.content} 
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/gallery" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </main>
    </div>
  )
}

