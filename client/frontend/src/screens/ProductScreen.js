import React, { useEffect } from 'react';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId])

    return (
        <div>
            { loading ? (<LoadingBox></LoadingBox>)
                : (
                    error ? (<MessageBox variant="danger" >{error}</MessageBox>)
                        : (
                            <div>
                                <Link to="/">Back to results</Link>
                                <div className="row top">

                                    <div className="col-2">
                                        <img className="large" src={product.image} alt={product.name}></img>
                                    </div>

                                    <div className="col-1">
                                        <ul>
                                            <li>
                                                <h1>{product.name}</h1>
                                            </li>
                                            <li>
                                                <Rating rating={product.rating} number={product.numReviews}></Rating>
                                            </li>
                                            <li>
                                                Price : ${product.price}
                                            </li>
                                            <li>
                                                Description :
                            <p>{product.description}</p>

                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-1">
                                        <div className="card card-body">
                                            <ul>
                                                <li>
                                                    <div className="row">
                                                        <div className="price">${product.price}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="row">
                                                        <div>Status</div>
                                                        <div>
                                                            {product.countInStock > 0 ? (<span className="success"> In Stock </span>) :
                                                                (<span className="error">Unavailble</span>)}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button className="primary block">Add to cart</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        ))}
        </div>

    )
}
