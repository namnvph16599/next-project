import { useRouter } from 'next/router';
import * as React from 'react';

export interface IProductDetailsProps {
}

export default function ProductDetails(props: IProductDetailsProps) {
    const router = useRouter()
    console.log('router', router);

    return (
        <div>
            ProductDetails
        </div>
    );
}
