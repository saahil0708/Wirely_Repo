import React from 'react';

function BurgerCard({ imageUrl, bgColor }) {
  return (
    <div className={`rounded-[25px] overflow-hidden p-8 relative flex flex-col justify-center min-h-[180px] ${bgColor}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: url(`${imageUrl}`),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-[1]" />
      
      <div className="relative z-10 max-w-[80%]">
        <h2 className="text-white text-2xl font-bold mb-2">Super Delicious Burger</h2>
        <p className="text-white/90 text-sm mb-4">
          A super delicious burger is a perfect mix of a juicy patty, melted cheese, crisp veggies, and a soft toasted bun, all packed with rich flavors in every bite!
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
}

function App() {
  const cards = [
    {
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop",
      bgColor: "bg-black"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=500&auto=format&fit=crop",
      bgColor: "bg-red-700"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=500&auto=format&fit=crop",
      bgColor: "bg-amber-400"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500&auto=format&fit=crop",
      bgColor: "bg-slate-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <BurgerCard 
            key={index} 
            imageUrl={card.imageUrl}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;