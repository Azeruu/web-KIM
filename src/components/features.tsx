import { Shield, Award, Leaf, Truck } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Guaranteed Quality",
        description: "Each product goes through strict quality control with international standards to ensure the best quality..",
    },
    {
        icon: Leaf,
        title: "Environmentally Friendly",
        description: "Our production process implements sustainable practices with recyclable materials.",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Extensive distribution network for timely delivery throughout Indonesia and abroad.",
    },
];
const certification = [
    {
        icon: Award,
        title: "ISO Certified",
        description: "We are ISO 9001:2015 certified as a guarantee of a standardized quality management system",
    },
    {
        icon: Award,
        title: "Halal Certified",
        description: "We are Halal certified by Indonesian and global halal certification institutions.",
    },
]

const FeaturesSection = () => {
    return (
        <section id="keunggulan" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-foreground uppercase tracking-[0.2em] text-sm mb-4">Why Kimglass</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
                        Our Advantages
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Our commitment to quality and customer satisfaction makes Kimglass a trusted choice.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group p-8 bg-card border border-foreground/30 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-background transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-foreground text-center font-serif text-3xl mt-20 mb-10">Our Certifications</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    {certification.map((cert) => (
                        <div
                            key={cert.title}
                            className="group p-8 bg-card border border-foreground/30 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                <cert.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-xl text-foreground mb-3">{cert.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                        </div>
                    ))};
                </div>

                {/* Stats Banner */}
                <div className="mt-10 bg-foreground/30 backdrop-blur rounded-lg p-10 md:p-16">
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        <div>
                            <p className="font-serif text-5xl text-primary-foreground mb-2">99%</p>
                            <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">Customer Satisfaction</p>
                        </div>
                        <div>
                            <p className="font-serif text-5xl text-primary-foreground mb-2">24/7</p>
                            <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">Customer Support</p>
                        </div>
                        <div>
                            <p className="font-serif text-5xl text-primary-foreground mb-2">0.01%</p>
                            <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">Defect Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
