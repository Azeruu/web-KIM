const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-primary to-accent py-8 pt-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-10 mb-5">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a href="#beranda" className="font-serif text-2xl tracking-wider inline-block mb-4">
                            <span className="text-primary-foreground">KIM</span>
                            <span className="font-light text-primary-foreground/70">GLASS</span>
                        </a>
                        <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
                            Produsen glassware premium dengan lebih dari 25 tahun pengalaman dalam menghadirkan produk kaca berkualitas tinggi untuk pasar domestik dan internasional.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-primary-foreground font-medium mb-4 uppercase tracking-wider text-sm">Navigasi</h4>
                        <ul className="space-y-1">
                            <li><a href="#beranda" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Beranda</a></li>
                            <li><a href="#tentang" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Tentang Kami</a></li>
                            <li><a href="#produk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Produk</a></li>
                            <li><a href="#keunggulan" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Keunggulan</a></li>
                            <li><a href="#kontak" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-primary-foreground font-medium mb-4 uppercase tracking-wider text-sm">Produk</h4>
                        <ul className="space-y-3">
                            <li><a href="#produk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Wine Glasses</a></li>
                            <li><a href="#produk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Champagne Flutes</a></li>
                            <li><a href="#produk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Tumblers</a></li>
                            <li><a href="#produk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Decanters</a></li>
                            <li><a href="#produk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Custom Orders</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-3 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-foreground/50 text-sm">
                        © 2025 Reza. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
