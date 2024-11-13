import PriceTag from "./PriceTag";
import AddToCartButton from "./AddToCartButton";
import './ProductCard.css';

type ProductCardProps = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export default function ProductCard ({ name, price, description, image, category }: ProductCardProps){
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <PriceTag price={price} />
        <p className="product-category">Category: {category}</p>
        <p className="product-description">{description}</p>
        <AddToCartButton />
      </div>
    </div>
  );
};
