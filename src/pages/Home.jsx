import { Star } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
export const Home = () => {
    return (
        <div className="min-h-screen bg-backgound text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
            <ThemeToggle />
        {/* StarBackground */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection/>
            </main>
        {/* Footer */}
        </div>
    );
}