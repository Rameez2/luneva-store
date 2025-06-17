import { TrendingUp } from "lucide-react"
import Image from "next/image";

const CollectionsSection = () => {

  const collections = [
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      count: "12 items",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=center",
      count: "8 items",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Lifestyle",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      count: "15 items",
      gradient: "from-emerald-500 to-teal-600",
    },
  ]

    return (
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Shop by Category
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className={`group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden rounded-lg animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-0">
                  <div className="relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
                    ></div>

                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-1">{collection.name}</h3>
                      <p className="text-sm opacity-90">{collection.count}</p>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default CollectionsSection;
