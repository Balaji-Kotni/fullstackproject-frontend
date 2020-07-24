import React from "react";
import { API } from "../../backend";

export default function ImageHelper({ product }) {
    const imageurl = product
        ? `${API}/product/photo/${product._id}`
        : `https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg&ga=GA1.2.1940706625.1594867739`;
    return (
        <div className="rounded border border-success p-2">
            <img
                src={imageurl}
                alt="photo"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    );
}
