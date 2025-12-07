import React, { useState } from "react";
import Title from "../components/Title";

const Products = () => {
    const categories = [
        "All",
        "Wooden Products",
        "Bamboo Crafts",
        "Food Items",
        "Tailoring",
        "Handicrafts",
        "Decorative Items",
        "Home Utility Products",
        "Organic & Herbal Items",
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    // Sample product data (replace later with real data)
    const productData = [
        {
            id: 1,
            name: "Handcrafted Wooden Bowl",
            maker: "Ramesh Karnataka",
            price: "₹450",
            category: "Wooden Products",
            image: "/img/products/wood1.jpg",
        },
        {
            id: 2,
            name: "Natural Bamboo Basket",
            maker: "Sarita Assam",
            price: "₹320",
            category: "Bamboo Crafts",
            image: "/img/products/bamboo1.jpg",
        },
        {
            id: 3,
            name: "Homemade Pickles",
            maker: "Kavita Rajasthan",
            price: "₹150",
            category: "Food Items",
            image: "/img/products/food1.jpg",
        },
        {
            id: 4,
            name: "Stitched Kurti",
            maker: "Ayesha UP",
            price: "₹600",
            category: "Tailoring",
            image: "/img/products/tailor1.jpg",
        },
    ];

    // Filter logic
    const filteredProducts =
        selectedCategory === "All"
            ? productData
            : productData.filter((p) => p.category === selectedCategory);

    return (
        <div className="pb-10">
            {/* Heading */}
            <div className="text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400">
                <Title text1="Our " text2="Products" />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium">
                A transparent showcase of real products made under our employment model.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full border transition-all
                        ${selectedCategory === cat
                                ? "bg-yellow-500 text-white border-yellow-500"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl shadow-md bg-white hover:shadow-lg transition-all overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover"
                        />

                        {/* Content */}
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl font-semibold">{product.name}</h3>

                            <p className="text-gray-600 text-sm">
                                <span className="font-semibold">Maker:</span> {product.maker}
                            </p>

                            <p className="text-yellow-600 font-bold text-lg">
                                {product.price}
                            </p>

                            <button className="w-full bg-yellow-500 text-white font-medium py-2 mt-2 rounded-lg hover:bg-yellow-600">
                                Support This Maker
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 text-lg mt-10">
                    No products available in this category.
                </p>
            )}
        </div>
    );
};

export default Products;
