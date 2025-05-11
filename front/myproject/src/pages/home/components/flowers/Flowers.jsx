import React from 'react'
import style from './Flowers.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFloraThunk } from '../../../../redux/reducers/FloraSlice';

function Flowers() {

    const [searchText, setSearch] = useState("");
    const [sorted, setSorted] = useState("default");


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFloraThunk());
    }, [dispatch]);

    const flower = useSelector((state) => state.flora.flora);
    const loading = useSelector((state) => state.flora.loading);
    const error = useSelector((state) => state.flora.error);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error: {error}</div>;

    const addToCard = (product) => {
        let basket = JSON.parse(localStorage.getItem('basket')) || [];

        let existItem = basket.find((x) => x._id === product._id);
        if (existItem) {
            existItem.count++;
        } else {
            basket.push({ ...product, count: 1 });
        }
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    const addToWishList = (product) => {
        let wishList = JSON.parse(localStorage.getItem('wishList')) || [];

        let existItem = wishList.find((x) => x._id === product._id);
        if (existItem) {
            alert('This product is already in your wishList');
        } else {
            wishList.push(product);
        }
        localStorage.setItem('wishList', JSON.stringify(wishList));
    };

    const filteredFlora = flower && flower
        .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
        .sort((a, b) => {
            if (sorted === "default") return 0;
            if (sorted === "asc") return a.price - b.price;
            if (sorted === "desc") return b.price - a.price;
            return 0;
        });


    return (
        <div className={style.flora}>

            <i>Devoted to wonderful beauty</i>

            <h1>Flowers Pricing</h1>

            <div className={style.flower_src}>
                <div className={style.productSrc}>
                    <input type="text" value={searchText} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                </div>
            </div>
            <div className={style.flower_sort}>
                <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div className={style.flowers}>

                {filteredFlora && filteredFlora.map((product) => (
                    <div className={style.flower} key={product._id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p> $ {product.price}</p>
                        <div className={style.flower_btn}>
                            <button onClick={() => addToCard(product)}>Add To Card</button>
                            <button onClick={() => addToWishList(product)}>Add To WishList</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Flowers