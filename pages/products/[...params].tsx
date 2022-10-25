import { useRouter } from 'next/router';
import * as React from 'react';

export interface IProductsParamsProps {
}

export default function ProductsParams(props: IProductsParamsProps) {
    const router = useRouter()
    console.log('router', router);

    return (
        <div>
            ProductsParams 
        </div>
    );
}
