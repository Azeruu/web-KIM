import { useState, useEffect } from "react";

const KimglassWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    { name: "Premium Wine Glass", category: "Dining", image: "🍷" },
    { name: "Crystal Tumbler Set", category: "Barware", image: "🥃" },
    { name: "Elegant Champagne Flute", category: "Celebration", image: "🥂" },
    { name: "Modern Water Glass", category: "Daily Use", image: "🥛" },
  ];

  return (
    <div className="min-h-screen pt-10">

      {/* Hero Section */}
      <div id="home" className="hero min-h-screen ">
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
                className="inline-block"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.8)",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
                }}
              >
                <img src="/LogoKIM.png" alt="Kimglass Logo" className="w-50 h-50" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              Crafting Clarity,
              <br />
              <span className="text-secondary">Defining Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-4xl mx-auto">
              We are KIM Glass, one of leading glass tableware producer in the world from Jakarta, Indonesia.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn bg-accent hover:bg-primary text-primary-content border-none px-8 hover:scale-105 transition-transform hover:bg-secondary">
                Explore Collection
              </button>
              <button className="btn bg-accent hover:bg-primary text-primary-content border-none px-8 hover:scale-105 transition-transform hover:bg-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-2">
            Why Choose KIMGLASS
          </h2>
          <p className="text-lg text-center text-secondary mb-8">We Produce Premium glassware solutions for modern living. Experience the
            perfect blend of functionality and timeless design.</p>
          <div className="grid md:grid-row-2 gap-8">
            {/* Dropdown 1: Profil Perusahaan */}
            <div
              className=" bg-trasparent backdrop-blur-md shadow-lg hover:shadow-xl"
            >
              <div className="text-2xl text-primary font-bold mb-2 text-center">
                Profile
              </div>
              <div className="text-secondary grid grid-cols-2 gap-2">
                <div>
                  <h1 className="text-xl font-bold mb-3">Who Are We?</h1>
                  <p className="text-md">
                      We are company With 25 years of experience, KIM Glass Indonesia (P.T KWARSA INDAHMURNI) is established as one of the leading table glassware manufacturers in Indonesia. At KIM Glass, our commitment is to produce and deliver quality products, customer satisfaction and product diversification.
                    Our factory employs more than 800 personnel and produced an average of 180 tons of glassware daily at full capacity. We exports to more than 30 countries including South East Asia, U.S.A, Japan, Mexico, Brazil, Argentina and Turkey.
                    For our big chain retail customers, we have underwent and passed a series of audits to verify that our factory complies to the social, health, safety and good manufacturing aspects of the overall working conditions. These audits include: Security Chain Supply Assessment (Walmart), Social and Responsible Sourcing Audits (Walmart), ICS (initiative Clause Sociale) Audit (Casino Groupe) and Factory Capacity and Capability Audits (Walmart).
                    In 2017, we are proud to announce that our factory is now ISO 9001: 2015 certified (UKAS Management Systems; Certificate no. 0096752-01).
                  </p>
                </div>
                <img src="LogoKIM.png" alt="" className="w-100 h-100" />
              </div>
            </div>

            {/* Dropdown 2: Visi & Misi */}
            <div className="bg-transparent shadow-lg hover:shadow-xl">
              <div className="text-xl font-semibold text-primary mb-2">
                Vision & Mission
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-primary">Vision : </strong> To be one of leading glass tableware producer in the world
                </p>
                <p>
                  <strong className="text-primary">Mision:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>To be known globally as a supplier of best quality glassware.</li>
                    <li>To create progressive and innovative products for customers.</li>
                    <li>Continously refine on quality, extend our capabilities, improve our production efficiencies and elevate the level of customers service.</li>
                    <li>To nurture and expand customers loyalty.</li>
                    <li>To conduct our business in a socially responsible and ethical manner</li>
                    <li>To provide work environments whereby of our employess can meet their potential and ethical manner</li>
                    <li>To contribute to the protection of the environments through use of recycled products and recycling our resources</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Products Preview */}
      <div id="product" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            Our Collection
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Discover our curated selection of premium glassware designed for
            every occasion
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="card bg-secondary shadow-lg hover:shadow-2xl hover:-translate-y-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + index * 0.1
                    }s`,
                }}
              >
                <figure className="px-10 pt-10">
                  <div className="text-7xl">{product.image}</div>
                </figure>
                <div className="card-body items-center text-center">
                  <div className="badge badge-sm bg-accent border-none mb-2">
                    {product.category}
                  </div>
                  <h3 className="card-title text-primary-content text-lg">
                    {product.name}
                  </h3>
                  <div className="card-actions mt-4">
                    <button className="btn btn-sm bg-[#2C4F7C] hover:bg-[#1e3a5f] text-white border-none">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="py-20">
        <div
          className="container mx-auto px-4 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s",
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust KIMGLASS for their
            glassware needs
          </p>
          <button className="btn bg-[#4FD1C5] hover:bg-[#3db9ad] text-white border-none px-10 text-lg">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-5 bg-secondary text-base-300">
        <div className="flex">
          <img src="LogoKIM.png" alt="" className="w-15 h-15"/>
          <div className="text-3xl font-bold mb-2">KIMGLASS</div>
          <p className="max-w-md text-slate-600">
            Premium glassware manufacturer committed to excellence and
            innovation since 2020
          </p>
        </div>
        <div>
          <p className="text-sm text-base-200">
            © 2025 KIMGLASS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default KimglassWebsite;
