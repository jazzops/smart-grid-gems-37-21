import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface CityTabsProps {
  cities: string[];
  selectedCity: string;
  onCitySelect: (city: string) => void;
}

export const CityTabs = ({ cities, selectedCity, onCitySelect }: CityTabsProps) => {
  return (
    <Tabs value={selectedCity} onValueChange={onCitySelect} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {cities.map((city) => (
          <TabsTrigger key={city} value={city.toLowerCase()} className="relative">
            {city}
            {selectedCity === city.toLowerCase() && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};