import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glassware.jpg";

const Hero = () => {
    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center justify-start pl-10 overflow-hidden"
        >

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Koleksi glassware premium Kimglass"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="mx-auto px-6 absolute z-10">
                <div className="max-w-2xl">
                    <p className="text-accent uppercase text-sm mb-6">
                        Since 1998
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl text-accent/60 mb-6 ">
                        Beauty In,
                        <br />
                        <span className="italic font-light text-accent">Every Glass</span>
                    </h1>
                    <p className="text-primary-foreground/80 text-lg md:text-xl font-light mb-10 max-w-lg">
                        We provide premium quality glassware with high manufacturing precision to meet industrial and household needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-accent">
                        <Button >
                            See Our Collection
                        </Button>
                        <Button>
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 ">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-primary-foreground/60 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
