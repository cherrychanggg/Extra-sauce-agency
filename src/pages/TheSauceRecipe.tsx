import Navigation from "@/components/shared/Navigation";
import SauceRecipe from "@/components/SauceRecipe";
import Footer from "@/components/shared/Footer";

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