export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  specifications: {
    processor: string;
    RAM: string;
    storage: string;
    display: string;
    screenSize?: string; // Optional property for products like Smart TVs
    resolution?: string; // Optional property for products like Smart TVs
    refreshRate?: string; // Optional property for products like Smart TVs
    smartFeatures?: boolean; // Optional property for products like Smart TVs
    type?: string; // Optional property for products like Headphones
    wireless?: boolean; // Optional property for products like Headphones
    batteryLife?: string; // Optional property for products like Headphones
    noiseCancellation?: boolean; // Optional property for products like Headphones
  };
}
