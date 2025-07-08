import Navigation from "@/components/Navigation";
import SauceRecipe from "@/components/SauceRecipe";
import Footer from "@/components/Footer";

const TheSauceRecipe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SauceRecipe />
      <Footer />
    </div>
  );
};

export default TheSauceRecipe;