
type PriceTagProps = {
    price: number;
};

export default function PriceTag({ price }: PriceTagProps) {
    return <p className="price-tag">${price.toFixed(2)}</p>;
};
