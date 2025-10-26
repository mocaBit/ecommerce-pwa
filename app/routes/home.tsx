import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { categories, fetchProducts } from "../services/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amaz-ing - Ecommerce" },
    { name: "description", content: "Find the best products at the best prices" },
  ];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", selectedCategory, searchQuery],
    queryFn: () => fetchProducts(selectedCategory, searchQuery),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {selectedCategory === "all"
              ? "Todos los productos"
              : categories.find((c) => c.slug === selectedCategory)?.name}
          </h2>
          <p className="text-gray-600 mt-1">
            {isLoading ? "Cargando..." : `${products.length} productos encontrados`}
          </p>
        </div>

        <ProductGrid products={products} isLoading={isLoading} />
      </main>
    </div>
  );
}
