import aboutImage from "@/assets/KIMfront.jpg";

const AboutSection = () => {
    return (
        <section id="tentang" className="relative min-h-screen py-24 md:py-32 text-foreground">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={aboutImage}
                    alt="Koleksi glassware premium Kimglass"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            </div>

            <div className="container mx-auto px-6 absolute z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Right - Stats */}
                    <div className="order-1 md:order-2">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-8 bg-card/10 backdrop-blur rounded-lg shadow-soft">
                                <p className="font-serif text-5xl md:text-6xl text-accent mb-2">25+</p>
                                <p className="text-accent/70 text-sm uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="p-8 bg-card/10 backdrop-blur rounded-lg shadow-soft">
                                <p className="font-serif text-5xl md:text-6xl text-accent mb-2">500+</p>
                                <p className="text-accent/70 text-sm uppercase tracking-wider">Active Clients</p>
                            </div>
                            <div className="p-8 bg-card/10 backdrop-blur rounded-lg shadow-soft">
                                <p className="font-serif text-5xl md:text-6xl text-accent mb-2">1M+</p>
                                <p className="text-accent/70 text-sm uppercase tracking-wider">Units Produced</p>
                            </div>
                            <div className="p-8 bg-card/10 backdrop-blur rounded-lg shadow-soft">
                                <p className="font-serif text-5xl md:text-6xl text-accent mb-2">15</p>
                                <p className="text-accent/70 text-sm uppercase tracking-wider">Countries Exported</p>
                            </div>
                        </div>
                    </div>

                    {/* Left - Text */}
                    <div className="order-2 md:order-1">
                        <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">About Us</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-accent/70 leading-tight mb-6">
                            Quality Tradition,
                            <br />
                            <span className="italic font-light text-accent">Modern Inovation</span>
                        </h2>
                        <div className="space-y-6 text-accent/70 leading-relaxed">
                            <p>
                                Kimglass was founded in 1993 with the vision of becoming a leading glassware manufacturer in Indonesia. For over two decades, we have developed expertise in creating high-quality glass products.
                            </p>
                            <p>
                                With modern production facilities and an experienced team, we are able to meet the demands of both domestic and international markets. Every product is crafted with the highest quality standards and attention to detail.
                            </p>
                        </div>
                        <div className="mt-10 pt-10 border-t border-border">
                            <p className="font-serif text-2xl italic text-accent/70">
                                "Quality is a legacy that we maintain in every product."
                            </p>
                            <p className="text-accent mt-4">— Welly Tobagus : President</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
