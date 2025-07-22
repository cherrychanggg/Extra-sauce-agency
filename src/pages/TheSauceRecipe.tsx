
import Navigation from "@/components/shared/Navigation";
import SauceRecipeSection from "@/components/sections/sauce-recipe/SauceRecipeSection";
import Footer from "@/components/shared/Footer";

const TheSauceRecipe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SauceRecipeSection />
      <Footer />
    </div>
  );
};

export default TheSauceRecipe;
