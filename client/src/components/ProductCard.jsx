import React from 'react';
import Lottie from "lottie-react";
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems } = useAppContext();

    return product && (
        <div className="border border-gray-300 rounded-lg p-3 sm:p-4 bg-white w-full">
            <div className="flex items-center justify-center mb-3">
                <img
                    className="h-28 sm:h-32 md:h-36 object-contain transition-transform duration-200 ease-in-out group-hover:scale-105"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>
            <div className="text-sm sm:text-base text-gray-600">
                <p className="capitalize">{product.category}</p>
                <p className="text-gray-800 font-semibold text-base sm:text-lg truncate">{product.name}</p>

                <div className="flex items-center gap-1 mt-1">
                    {Array(5).fill('').map((_, i) => (
                        <Lottie
                            key={i}
                            animationData={assets.StarIcon}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            loop
                        />
                    ))}
                    <span className="text-xs">(4)</span>
                </div>

                <div className="flex items-end justify-between mt-3">
                    <p className="text-base sm:text-lg font-medium text-primary">
                        {currency}{product.offerPrice}
                        <span className="text-gray-500/60 text-xs sm:text-sm line-through ml-1">
                            {currency}{product.price}
                        </span>
                    </p>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary"
                    >
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 w-16 sm:w-20 h-8 rounded"
                                onClick={() => addToCart(product._id)}
                            >
                                <Lottie animationData={assets.Cart} className="h-6 w-6" loop />
                                <span className="text-xs sm:text-sm">Add</span>
                            </button>
                        ) : (
                            <div className="flex items-center gap-2 w-20 h-8 bg-primary/25 rounded select-none">
                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="px-2 text-sm"
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="px-2 text-sm"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
