import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productWineGlass from "@/assets/product-wine-glass.jpg";
import productChampagne from "@/assets/product-champagne.jpg";
import productTumbler from "@/assets/product-tumbler.jpg";
import productDecanter from "@/assets/product-decanter.jpg";

const products = [
    {
        id: 1,
        name: "Wine Glass Collection",
        category: "Stemware",
        image: productWineGlass,
        description: "Crystal wine glass with elegant design for a perfect drinking experience.",
    },
    {
        id: 2,
        name: "Champagne Flutes",
        category: "Stemware",
        image: productChampagne,
        description: "Champagne flute with a slim shape that keeps the bubble longer.",
    },
    {
        id: 3,
        name: "Premium Tumblers",
        category: "Barware",
        image: productTumbler,
        description: "Premium tumbler with thick base and amazing durability.",
    },
    {
        id: 4,
        name: "Crystal Decanters",
        category: "Accessories",
        image: productDecanter,
        description: "Crystal decanter to aerate wine and serve it in style.",
    },
];

const ProductsSection = () => {
    return (
        <section id="produk" className="py-24 md:py-32 bg-accent">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-foreground uppercase tracking-[0.2em] text-sm mb-4">Our Collection</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
                        Our Best Product
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Discover our various glassware collections made with high precision and premium quality materials.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative bg-card/40 border border-foreground/30 backdrop-blur rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-accent text-xs uppercase tracking-wider mb-2">{product.category}</p>
                                <h3 className="font-serif text-xl text-foreground mb-2">{product.name}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Button size="lg" className="group">
                        See All Product
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
