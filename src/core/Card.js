import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import { Redirect } from "react-router-dom";

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    setReload = f => f,
    //   function(f){return f}
    reload = undefined,
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const cartTitle = product ? product.name : "A photo from pexels";
    const cartDescrption = product ? product.description : "Defalt";
    const cartPrice = product ? product.price : "Default";

    const addToCart = () => {
        addItemToCart(product, () => setRedirect(true));
    };

    const getARedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCart = addtoCart => {
        return (
            addtoCart && (
                <button
                    onClick={addToCart}
                    type="button"
                    class="btn btn-secondry"
                    title="Add to cart"
                >
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
            )
        );
    };
    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product._id);
                        setReload(!reload);
                    }}
                    type="button"
                    className="btn btn-secondry bg-dainger"
                    title="Add to cart"
                >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            )
        );
    };
    return (
        <div className="continer">
            <div className="row">
                <div className="col">
                    <div className="product-top">
                        <ImageHelper product={product} />

                        <button
                            type="button"
                            class="btn btn-secondry"
                            title="Quik Shop"
                        >
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondry"
                            title="Add to Wishlist"
                        >
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondry"
                            title="Add to cart"
                        >
                            {showAddToCart(addtoCart)}
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondry"
                            title="Add to cart"
                        >
                            {showRemoveFromCart(removeFromCart)}
                        </button>
                    </div>
                    <div className="product-bottom text-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        <h2 className="title-cart text-dark">{cartTitle}</h2>
                        <p class="card-text text-dark">{cartDescrption}</p>
                        <button type="button" class="btn btn-secondary">
                            $ {cartPrice}
                        </button>

                        <div className="card-body">
                            {getARedirect(redirect)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

/* <div className="container ">
            
            <div className="card-header lead bg-success ">{cartTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product} />
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cartDescrption}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">
                    $ {cartPrice}
                </p>
                <div className="row">
                    <div className="col-12">{showAddToCart(addtoCart)}</div>
                    <div className="col-12">
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div> */
