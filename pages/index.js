/** @format */

import Head from 'next/head';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';

import { getData } from '../utils/fetchData';
import ProductItem from '../components/product/ProductItem';
import filterSearch from '../utils/filterSearch';
import { useRouter } from 'next/router';
import Filter from '../components/Filter';

const Home = (props) => {
	const [products, setProducts] = useState(props.products);

	return (
		<div className='products'>
			{products.length === 0 ? (
				<h2>No Products</h2>
			) : (
				products.map((product) => (
					<ProductItem
						key={product._id}
						product={product}
						handleCheck={handleCheck}
					/>
				))
			)}
		</div>
	);
};
export default Home;
