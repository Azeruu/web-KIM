import { useState, useEffect } from "react";
import { Map, Phone, Mail, Printer } from "lucide-react";

// Data Collections - Ready for backend integration
const collections = [
  { id: 22, name: "Rio", slug: "rio", image: "/collection/rio.jpg", description: "Carnival inspired design" },
  { id: 1, name: "Simply", slug: "simply", image: "/collection/simply.jpg", description: "Simple but elegant design" },
  { id: 2, name: "Diamonds", slug: "diamonds", image: "/collection/diamond.jpg", description: "Brilliant crystal cut patterns" },
  { id: 4, name: "Rosa", slug: "rosa", image: "/collection/rosa.jpg", description: "Elegant rose pattern collection" },
  { id: 5, name: "Strawberries", slug: "strawberries", image: "/collection/strawberries.jpg", description: "Fresh and vibrant design" },
  { id: 6, name: "Tulips", slug: "tulips", image: "/collection/tulip.jpg", description: "Graceful floral patterns" },
  { id: 1, name: "FORTIS", slug: "fortis", image: "/collection/rio.jpg", description: "Strong and elegant design" },
  { id: 3, name: "Cosmo", slug: "cosmo", image: "🌟", description: "Modern cosmic inspired design" },
  { id: 7, name: "Quadro", slug: "quadro", image: "◼️", description: "Geometric square design" },
  { id: 8, name: "Bricks", slug: "bricks", image: "🧱", description: "Textured brick pattern" },
  { id: 9, name: "Daises", slug: "daises", image: "🌼", description: "Charming daisy collection" },
  { id: 10, name: "Owl", slug: "owl", image: "🦉", description: "Unique owl themed design" },
  { id: 11, name: "Wave", slug: "wave", image: "🌊", description: "Flowing wave patterns" },
  { id: 12, name: "Picnic", slug: "picnic", image: "🧺", description: "Casual outdoor collection" },
  { id: 13, name: "Classic", slug: "classic", image: "👑", description: "Timeless classic design" },
  { id: 14, name: "Crystal", slug: "crystal", image: "💠", description: "Premium crystal glassware" },
  { id: 15, name: "Apple", slug: "apple", image: "🍎", description: "Fresh apple pattern" },
  { id: 16, name: "Elegance", slug: "elegance", image: "✨", description: "Refined elegant style" },
  { id: 17, name: "Galaxy", slug: "galaxy", image: "🌌", description: "Celestial galaxy design" },
  { id: 18, name: "Hearts", slug: "hearts", image: "❤️", description: "Romantic heart patterns" },
  { id: 19, name: "Imperial", slug: "imperial", image: "👑", description: "Royal imperial collection" },
  { id: 20, name: "Pearls", slug: "pearls", image: "🔮", description: "Lustrous pearl finish" },
  { id: 21, name: "Roses", slug: "roses", image: "🌺", description: "Beautiful rose collection" },
  { id: 23, name: "Silhouette", slug: "silhouette", image: "🖼️", description: "Artistic silhouette pattern" },
  { id: 24, name: "Sea Shells", slug: "sea-shells", image: "🐚", description: "Ocean shell inspired" },
];

// Data Categories - Ready for backend integration
const categories = [
  { id: 1, name: "Shot Glasses", slug: "shot-glasses", icon: "🥃", count: 0 },
  { id: 2, name: "Simply", slug: "simply", icon: "✨", count: 0 },
  { id: 3, name: "Bowl", slug: "bowl", icon: "🥣", count: 0 },
  { id: 4, name: "Plate", slug: "plate", icon: "🍽️", count: 0 },
  { id: 5, name: "Mug", slug: "mug", icon: "☕", count: 0 },
  { id: 6, name: "Tumbler", slug: "tumbler", icon: "🥤", count: 0 },
  { id: 7, name: "Cup and Saucer", slug: "cup-and-saucer", icon: "🍵", count: 0 },
  { id: 8, name: "Miscellaneous", slug: "miscellaneous", icon: "🎁", count: 0 },
  { id: 9, name: "New Products", slug: "new-products", icon: "🆕", count: 0 },
];

// Sample Products - This will be replaced with real data from backend
const sampleProducts = [
  {
    id: 1,
    name: "Mangkok Kolak",
    collectionId: 13, // Classic
    categoryId: 1, // Shot Glasses
    image: "/KIM/B414.jpg",
    price: 5000,
    inStock: true
  },
  {
    id: 2,
    name: "Crystal Tumbler Set",
    collectionId: 14, // Crystal
    categoryId: 6, // Tumbler
    image: "🥃",
    price: 0,
    inStock: true
  },
  {
    id: 3,
    name: "Elegant Champagne Flute",
    collectionId: 16, // Elegance
    categoryId: 1, // Shot Glasses
    image: "🥂",
    price: 0,
    inStock: true
  },
  {
    id: 4,
    name: "Modern Water Glass",
    collectionId: 2, // Simply
    categoryId: 6, // Tumbler
    image: "🥛",
    price: 0,
    inStock: true
  },
];

const KimglassWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [displayedCollections, setDisplayedCollections] = useState(8);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter products based on selected category and collection
  const filteredProducts = sampleProducts.filter(product => {
    const matchCategory = selectedCategory === "all" || product.categoryId === parseInt(selectedCategory);
    const matchCollection = selectedCollection === "all" || product.collectionId === parseInt(selectedCollection);
    return matchCategory && matchCollection;
  });

  const showMoreCollections = () => {
    setDisplayedCollections(prev => Math.min(prev + 8, collections.length));
  };

  const showLessCollections = () => {
    setDisplayedCollections(8);
  };

  return (
    <div
      className="min-h-screen pt-10 h-screen relative bg-fixed "
      style={{
        backgroundImage: "url('/KIMfront.JPG')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-gradient-to-b from-base-100 via-transparent to-base-100"></div>

      {/* Hero Section */}
      <div id="home" className="hero min-h-screen relative">
        <div className="hero-content text-center">
          <div
            className="max-w-4xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="mb-8">
              <div
                className="inline-block relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.8)",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
                }}
              >
                <img
                  src="/LogoKIM.png"
                  alt="Kimglass Logo"
                  className="w-50 h-50 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold text-base-content mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
                textShadow:
                  "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6)",
              }}
            >
              Crafting Clarity,
              <br />
              <span className="text-base-content">Defining Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-4xl mx-auto">
              We are KIM Glass, one of leading glass tableware producer in the
              world from Jakarta, Indonesia.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#collection"
                className="btn btn-primary border-none px-8 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                Explore Collection
              </a>
              <a
                href="#contact"
                className="btn btn-secondary border-none px-8 hover:shadow-lg hover:shadow-secondary/30 hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="about"
        className="py-20 bg-gradient-to-t from-base-300 via-primary to-base-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-2">
            Why Choose KIMGLASS
          </h2>
          <p className="text-lg text-center text-base-content/70 mb-12">
            We Produce Premium glassware solutions for modern living. Experience
            the perfect blend of functionality and timeless design.
          </p>
          <div className="grid md:grid-cols-1 gap-8">
            {/* Profile Section */}
            <div className="card bg-base-100/5 backdrop-blur-lg transition-all duration-300">
              <div className="card-body">
                <h2 className="card-title text-3xl text-primary mb-4 justify-center">
                  Company Profile
                </h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-secondary text-center mb-3">
                      Who Are We?
                    </h3>
                    <p className="text-base-content/80 leading-relaxed">
                      We are company With 25 years of experience, KIM Glass
                      Indonesia (P.T KWARSA INDAHMURNI) is established as one of
                      the leading table glassware manufacturers in Indonesia. At
                      KIM Glass, our commitment is to produce and deliver
                      quality products, customer satisfaction and product
                      diversification.
                    </p>
                    <p className="text-base-content/80 leading-relaxed mt-4">
                      Our factory employs more than 800 personnel and produced
                      an average of 180 tons of glassware daily at full
                      capacity. We exports to more than 30 countries including
                      South East Asia, U.S.A, Japan, Mexico, Brazil, Argentina
                      and Turkey.
                    </p>
                    <p className="text-base-content/80 leading-relaxed mt-4">
                      For our big chain retail customers, we have underwent and
                      passed a series of audits to verify that our factory
                      complies to the social, health, safety and good
                      manufacturing aspects of the overall working conditions.
                      These audits include: Security Chain Supply Assessment
                      (Walmart), Social and Responsible Sourcing Audits
                      (Walmart), ICS (initiative Clause Sociale) Audit (Casino
                      Groupe) and Factory Capacity and Capability Audits
                      (Walmart).
                    </p>
                    <p className="text-base-content/80 leading-relaxed mt-4">
                      In 2017, we are proud to announce that our factory is now
                      ISO 9001: 2015 certified (UKAS Management Systems;
                      Certificate no. 0096752-01).
                    </p>
                    <div className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                      <p className="text-sm text-base-content/70">
                        <strong className="text-accent">
                          ISO 9001:2015 Certified
                        </strong>{" "}
                        - UKAS Management Systems (Certificate no. 0096752-01)
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center rounded-2xl drop-shadow-xl hover:scale-105 transition-transform duration-500">
                    <img
                      src="/kimoffice.png"
                      alt="KIM Glass Logo"
                      className="w-auto h-auto object-contain "
                      style={{
                        maskImage:
                          "radial-gradient(circle, black 60%, transparent 100%)",
                        WebkitMaskImage:
                          "radial-gradient(circle, black 60%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Section */}
            <div className="mt-5">
              <div className="card-body">
                <h2 className="card-title text-3xl text-primary-content mb-4 justify-center">
                  Vision & Mission
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-base-100/10 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Vision
                    </h3>
                    <p className="text-base-content/80">
                      To be one of leading glass tableware producer in the world
                    </p>
                  </div>
                  <div className="p-6 bg-base-100/10 backdrop-blur-lg rounded-lg text-center">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Mission
                    </h3>
                    <ul className="space-y-3 ">
                      {[
                        "To be known globally as a supplier of best quality glassware.",
                        "To create progressive and innovative products for customers.",
                        "Continously refine on quality, extend our capabilities, improve our production efficiencies and elevate the level of customers service.",
                        "To nurture and expand customers loyalty.",
                        "To conduct our business in a socially responsible and ethical manner",
                        "To provide work environments whereby of our employess can meet their potential and ethical manner",
                        "To contribute to the protection of the environments through use of recycled products and recycling our resources",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 ">
                          <span className="text-accent text-xl flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-base-content/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div
        className="py-16 bg-gradient-to-t from-base-100 via-primary to-base-300"
        id="certificate"
      >
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Certifications
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto mb-10">
            We are proud to present our professional certifications and quality
            achievements that reflect our commitment to excellence.
          </p>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Certificate Card */}
            <div className="card bg-base-100/10 shadow-md hover:shadow-xl transition-all duration-300">
              <figure className="px-6 pt-6">
                <img
                  src="/ISO.jpg"
                  alt="Certificate 1"
                  className="rounded-xl object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg font-semibold">
                  ISO 9001:2015
                </h3>
                <p className="text-sm text-base-content/70">
                  Quality Management System Certification
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100/10 shadow-md hover:shadow-xl transition-all duration-300">
              <figure className="px-6 pt-6">
                <img
                  src="ISO.jpg"
                  alt="Certificate 2"
                  className="rounded-xl object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg font-semibold">
                  ISO 14001:2015
                </h3>
                <p className="text-sm text-base-content/70">
                  Environmental Management Certification
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100/10 shadow-md hover:shadow-xl transition-all duration-300">
              <figure className="px-6 pt-6">
                <img
                  src="halal.jpg"
                  alt="Certificate 3"
                  className="rounded-xl object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg font-semibold">
                  Halal Certification
                </h3>
                <p className="text-sm text-base-content/70">
                  Officially recognized Halal product certification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div
        id="collection"
        className="py-20 bg-gradient-to-t from-base-300 to-base-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            Our Collections
          </h2>
          <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            Explore our diverse range of glassware collections, each with its
            unique design and character
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
            {collections
              .slice(0, displayedCollections)
              .map((collection, index) => (
                <div
                  key={collection.id}
                  className="card bg-secondary-content/10 shadow-md hover:shadow-xl hover:scale-105 border border-base-300 transition-all duration-300 cursor-pointer"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${
                      0.3 + index * 0.05
                    }s`,
                  }}
                  onClick={() =>
                    setSelectedCollection(collection.id.toString())
                  }
                >
                  <div className="card-body items-center text-center p-4">
                    <img
                      src={collection.image}
                      className="w-full h-full object-cover object-center"
                      alt={collection.name}
                    />
                    <h3 className="font-bold text-base-content text-sm">
                      {collection.name}
                    </h3>
                    <p className="text-xs text-base-content/60">
                      {collection.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center">
            {displayedCollections < collections.length ? (
              <button
                onClick={showMoreCollections}
                className="btn btn-primary btn-sm"
              >
                Show More Collections (
                {collections.length - displayedCollections} more)
              </button>
            ) : displayedCollections > 8 ? (
              <button
                onClick={showLessCollections}
                className="btn btn-secondary btn-sm"
              >
                Show Less
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        id="product"
        className="py-20 bg-gradient-to-b from-base-300 to-primary"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            Our Products
          </h2>
          <p className="text-center text-base-content/70 mb-8 max-w-2xl mx-auto">
            Discover our curated selection of premium glassware designed for
            every occasion
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`btn btn-sm ${
                selectedCategory === "all" ? "btn-primary" : "btn-ghost"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id.toString())}
                className={`btn btn-sm ${
                  selectedCategory === category.id.toString()
                    ? "btn-primary"
                    : "btn-ghost"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                const collection = collections.find(
                  (c) => c.id === product.collectionId
                );
                const category = categories.find(
                  (c) => c.id === product.categoryId
                );

                return (
                  <div
                    key={product.id}
                    className="card bg-base-100/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-base-300 transition-all duration-300"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(30px)",
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${
                        0.5 + index * 0.1
                      }s`,
                    }}
                  >
                    <figure className="px-10 pt-10">
                      <img
                        src={product.image}
                        className="text-7xl hover:scale-110 transition-transform duration-300"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <div className="flex gap-2 mb-2">
                        {category && (
                          <div className="badge badge-accent badge-sm">
                            {category.name}
                          </div>
                        )}
                        {collection && (
                          <div className="badge badge-secondary badge-sm">
                            {collection.name}
                          </div>
                        )}
                      </div>
                      <h3 className="card-title text-base-content text-lg">
                        {product.name}
                      </h3>
                      <div className="card-actions mt-4">
                        <button className="btn btn-primary btn-sm border-none hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-base-content/60 text-lg">
                  No products found for the selected filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        id="contact"
        className="py-20 bg-gradient-to-b from-primary to-base-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA2YTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div
          className="container mx-auto px-4 text-center relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s",
          }}
        >
          <h2 className="text-4xl font-bold text-primary-content mb-6">
            Ready to Elevate Your Experience?
          </h2>
          <p className="text-xl text-primary-content/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust KIMGLASS for their
            glassware needs
          </p>
          <button className="btn btn-accent border-none px-10 text-lg hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-secondary to-base-200 text-base-content/60 ">
        {/* BAGIAN UTAMA FOOTER (Grid Kolom) */}
        <div className="flex flex-col md:flex-row justify-between items-center footer p-10">
          {/* Kolom 1: Branding, Logo, & Media Sosial */}
          <aside className="flex flex-col justify-center items-center">
            <img
              src="/LogoKIM.png"
              alt="KIM Glass Logo"
              className="w-20 h-20"
            />
            <p className="font-bold text-lg text-base-content">KIMGLASS</p>
            <p className="max-w-xs text-sm text-center">
              Produsen glassware dan kemasan kaca terdepan di Indonesia.
            </p>
          </aside>

          {/* Kolom 2: Navigasi "Perusahaan" */}
          <nav className="flex flex-col justify-start">
            <header className="footer-title">Perusahaan</header>
            <a href="#about" className="link link-hover">
              Tentang Kami
            </a>
            <a href="#contact" className="link link-hover">
              Hubungi Kami
            </a>
          </nav>

          {/* Kolom 3: Navigasi "Produk & Layanan" */}
          <nav className="flex flex-col justify-start">
            <header className="footer-title">Produk & Layanan</header>
            <a href="#collection" className="link link-hover">
              Katalog Glassware
            </a>
          </nav>

          {/* Kolom 4: Kontak (Ditingkatkan dari kode Anda) */}
          <nav>
            <header className="footer-title">Kontak Kami</header>
            <a
              href="https://maps.app.goo.gl/NTEC9tyAZxiBFUhv5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 link link-hover"
            >
              <Map className="text-warning flex-shrink-0 mt-1" size={18} />
              <span>
                Jl. Raya Serang KM 26, Balaraja, Tangerang 15610, Indonesia
              </span>
            </a>
            <a href="tel:+62215953366" className="flex gap-2 link link-hover">
              <Phone className="text-warning flex-shrink-0 mt-1" size={18} />
              <span>+6221 595 3366, 595 0514-16</span>
            </a>
            <a
              href="mailto:mail@kimglass.co.id"
              className="flex gap-2 link link-hover"
            >
              <Mail className="text-warning flex-shrink-0 mt-1" size={18} />
              <span>mail@kimglass.co.id</span>
            </a>
            <p className="flex gap-2">
              <Printer className="text-warning flex-shrink-0 mt-1" size={18} />
              <span>+6221 595 0511 (Fax)</span>
            </p>
          </nav>
        </div>

        {/* BAGIAN BAWAH (Copyright & Legal) */}
        <div className="footer footer-center p-4">
          <aside>
            <p className="text-sm text-base-200">
              © 2025 KIMGLASS. All rights reserved. |
              <a href="/kebijakan-privasi" className="link link-hover mx-2">
                Kebijakan Privasi
              </a>{" "}
              |
              <a href="/syarat-ketentuan" className="link link-hover mx-2">
                Syarat & Ketentuan
              </a>
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default KimglassWebsite;