interface Props {
    currency: string;
    price: string;
}

export default function Price({ currency, price }: Props) {
    const formattedPrice = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency
    }).format(Number(price));

    return <span>{formattedPrice}</span>;
}
