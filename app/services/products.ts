import type { Product, Category } from "../types/product";

export const categories: Category[] = [
  { id: "1", name: "Todos", slug: "all" },
  { id: "2", name: "Electrónica", slug: "electronics" },
  { id: "3", name: "Ropa", slug: "clothing" },
  { id: "4", name: "Hogar", slug: "home" },
  { id: "5", name: "Deportes", slug: "sports" },
  { id: "6", name: "Libros", slug: "books" },
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Laptop Pro 15",
    description: "Laptop de alto rendimiento con procesador de última generación",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "electronics",
    stock: 15,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Smartphone X",
    description: "Teléfono inteligente con cámara de 108MP",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "electronics",
    stock: 25,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con cancelación de ruido",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "electronics",
    stock: 50,
    rating: 4.3,
  },
  {
    id: "4",
    name: "Camiseta Premium",
    description: "Camiseta de algodón 100% orgánico",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "clothing",
    stock: 100,
    rating: 4.2,
  },
  {
    id: "5",
    name: "Jeans Clásicos",
    description: "Jeans de mezclilla con corte recto",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    category: "clothing",
    stock: 75,
    rating: 4.4,
  },
  {
    id: "6",
    name: "Zapatillas Deportivas",
    description: "Zapatillas para running con tecnología de amortiguación",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    category: "sports",
    stock: 60,
    rating: 4.6,
  },
  {
    id: "7",
    name: "Lámpara LED",
    description: "Lámpara de escritorio con control de intensidad",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    category: "home",
    stock: 40,
    rating: 4.1,
  },
  {
    id: "8",
    name: "Juego de Toallas",
    description: "Set de 6 toallas de algodón egipcio",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    category: "home",
    stock: 30,
    rating: 4.5,
  },
  {
    id: "9",
    name: "Balón de Fútbol",
    description: "Balón oficial tamaño 5",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400&h=300&fit=crop",
    category: "sports",
    stock: 45,
    rating: 4.3,
  },
  {
    id: "10",
    name: "Libro: El Poder del Ahora",
    description: "Bestseller de desarrollo personal",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    category: "books",
    stock: 80,
    rating: 4.8,
  },
  {
    id: "11",
    name: "Cafetera Automática",
    description: "Cafetera programable con molinillo integrado",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop",
    category: "home",
    stock: 20,
    rating: 4.4,
  },
  {
    id: "12",
    name: "Mochila para Laptop",
    description: "Mochila resistente al agua con compartimento acolchado",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "electronics",
    stock: 55,
    rating: 4.2,
  },
];

// Simula una llamada asíncrona al servidor
export const fetchProducts = async (
  category?: string,
  searchQuery?: string
): Promise<Product[]> => {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filtered = [...mockProducts];

  // Filtrar por categoría
  if (category && category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }

  // Filtrar por búsqueda
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }

  return filtered;
};
