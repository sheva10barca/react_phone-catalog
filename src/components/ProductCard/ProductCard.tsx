import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../CartProvider/CartProvider';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { AddToFavButton } from '../AddToFavButton/AddToFavButton';

import { getProduct } from '../../api/products';
import { getDiscount } from '../../helpers/getDiscount';

import { Product } from '../../types/Product';
import { ProductDetails } from '../../types/ProductDetails';
import { ProductType } from '../../types/ProductType';

import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    discount,
    screen,
    capacity,
    ram,
    id,
    imageUrl,
    type,
  } = product;

  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const discountedPrice = getDiscount(price, discount);

  const [productWithDetails, setProductWithDetails]
    = useState<ProductDetails | null>(null);

  const loadProduct = async () => {
    try {
      const productFromServer = await getProduct(id);

      setProductWithDetails(productFromServer);
    } catch {
      throw new Error('Loading Error');
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const getTypeOfProduct = (prodType: string) => {
    switch (prodType) {
      case ProductType.tablet:
        return 'tablets';

      case ProductType.accessory:
        return 'accessories';

      case ProductType.phone:
      default:
        return 'phones';
    }
  };

  const productType = getTypeOfProduct(type);

  const isItemInCart = productsInCart.some(cartItem => cartItem.id === id);

  const handleAddToCart = () => {
    if (isItemInCart) {
      const updatedCart = productsInCart.filter(cartItem => cartItem.id !== id);

      setProductsInCart(updatedCart);

      return;
    }

    const newProd = {
      ...product,
      quantity: 1,
    };

    setProductsInCart([...productsInCart, newProd]);
  };

  return (
    <div className="ProductCard">
      <div className="ProductCard__content">
        <Link to={`/${productType}/${id}`} state={productWithDetails} className="ProductCard__photo">
          <img src={imageUrl} alt="product" className="ProductCard__img" />
        </Link>

        <div className="ProductCard__title">{name}</div>

        <div className="ProductCard__price">
          <div className="ProductCard__price-normal">{`$${discountedPrice}`}</div>
          {discount > 0 && (
            <div className="ProductCard__price-discounted">{`$${price}`}</div>
          )}
        </div>

        <div className="ProductCard__details">
          <div className="ProductCard__details-item">
            <div className="ProductCard__details-item__name">Screen</div>
            <div className="ProductCard__details-item__value">
              {screen || 'unknown'}
            </div>
          </div>
          <div className="ProductCard__details-item">
            <div className="ProductCard__details-item__name">Capacity</div>
            <div className="ProductCard__details-item__value">
              {capacity || 'unknown'}
            </div>
          </div>
          <div className="ProductCard__details-item">
            <div className="ProductCard__details-item__name">RAM</div>
            <div className="ProductCard__details-item__value">
              {ram || 'unknown'}
            </div>
          </div>
        </div>

        <div className="ProductCard__buttons">
          <AddToCartButton handleAddToCart={handleAddToCart} id={id} />
          <AddToFavButton />
        </div>
      </div>
    </div>
  );
};
