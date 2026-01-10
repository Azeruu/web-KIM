import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="kontak" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Contact Info */}
                    <div>
                        <p className="text-foreground uppercase tracking-[0.2em] text-sm mb-4">Contact Us</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
                            Let's Talk
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                            We're ready to help you find the best glassware solutions for your business or personal needs.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Address</p>
                                    <p className="text-muted-foreground text-sm">
                                        Jl. Raya Serang KM 26<br />
                                        Industry Area Olex, Balaraja<br />
                                        Tangerang 15610, Indonesia<br />
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Phone</p>
                                    <p className="text-muted-foreground text-sm">
                                        +6221 595 3366<br />
                                        +6221 595 0514-16<br/>
                                        fax +6221 595 0511
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Email</p>
                                    <p className="text-muted-foreground text-sm">
                                        mail@kimglass.co.id<br />
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Operational Hours</p>
                                    <p className="text-muted-foreground text-sm">
                                        Monday - Friday: 08:00 - 17:00<br />
                                        Saturday: 08:00 - 12:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-foreground/10 backdrop-blur rounded-lg p-8 md:p-10 shadow-elegant">
                        <h3 className="font-serif text-2xl text-foreground mb-6">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-foreground mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-foreground mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-foreground mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Company name (optional)"
                                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-foreground mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground resize-none"
                                />
                            </div>
                            <Button size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
