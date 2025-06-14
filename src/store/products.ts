import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { ProductDetailsProps } from "@/components/product/include/product_view";

// Function to fetch all products from Firebase
export const fetchProducts = async (): Promise<ProductDetailsProps[]> => {
  try {
    // Get the products collection from Firebase
    const productsCollection = collection(db, "meals");
    // Get all documents from the collection
    const productsSnapshot = await getDocs(productsCollection);

    const products: ProductDetailsProps[] = [];

    // Convert each document to a product object
    productsSnapshot.forEach((doc) => {
      const data = doc.data();

      // Transform the data to match ProductDetailsProps
      const product: ProductDetailsProps = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        image: data.image1,
        productImage: data.image1,
        route_link: "",
        ingredients: data.ingredients.map((ing: any) => ing.name)
      };

      products.push(product);
    });

    // Sort products by ID in ascending order
    products.sort((a, b) => Number(a.id) - Number(b.id));

    return products;
  } catch (error) {
    return [];
  }
};

