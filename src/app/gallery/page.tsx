import Navbar from '../components/Navbar'
import Card from '../components/card'

const galleryData = [
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
      { 
        title: "Acer Aspire 5 15.6", 
        content: "The Acer Aspire 5 15.6 13th Gen Intel Core i7 16GB Ram 1TB SSD Integrated Intel Iris Xe Graphics (A515-58P-75LR) Steel Gray", 
        imageUrl: "/image/image4.jpg"
      },
      { 
        title: "Dell 15.6 Latitude 3540 ", 
        content: "The Dell 15.6 Latitude 3540 Full HD Notebook (Intel Core i5 13th Gen 16GB RAM - 256GB SSD)", 
        imageUrl: "/image/image5.jpg"
      },
      { 
        title: "Microsoft Surface Laptop 4", 
        content: "The Microsoft Surface Laptop 4, 13.5-inch PixelSense Multi-Touch Display, AMD R7, 16GB Ram 512GB SSD (7ID-00001) - Matte Black", 
        imageUrl: "/image/image6.jpg"
      },
]

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <Card 
              key={index} 
              title={item.title} 
              content={item.content} 
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

