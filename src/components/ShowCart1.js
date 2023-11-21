import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Alert from "./Alert";

const ShowCart1 = () => {
    const [showAlerts, setshowAlerts] = useState(false);
    const [showAlerts1, setshowAlerts1] = useState(false);

    // State to store the filtered cart items
    const [filteredCart, setFilteredCart] = useState([]);

    useEffect(() => {
        // Retrieve the cart data from local storage
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];

        // Filter out items that meet your condition (e.g., exclude missing items)
        const filteredItems = cartData.filter(
            (item) => item.title && item.quantity > 0
        );
        setFilteredCart(filteredItems);
    }, []);

    const handleDelete = (index) => {
        setshowAlerts(true);
        // Create a copy of the filteredCart array
        const updatedCart = [...filteredCart];
        // Remove the item at the specified index
        updatedCart.splice(index, 1);
        // Update the filteredCart state and local storage
        setFilteredCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setTimeout(() => {
            setshowAlerts(false);
        }, 3000);
    };

    // Calculate the total price of all items in the cart
    const totalCartPrice = filteredCart.reduce(
        (total, item) => total + (item.totalPrice || 0),
        0
    );

    const checklog = () => {
        if (!localStorage.getItem('auth-token')) {
            setshowAlerts1(true);
            setTimeout(() => {
                setshowAlerts1(false);
            }, 2000);
        }
    };
    
    const [showAlerts2, setShowAlerts2] = useState(false);
    const handlePayment = async () => {

        // on hold for now 
        // if (localStorage.getItem('auth-token')) {
        //     try {
        //         // Retrieve the title and description from local storage
        //         const title = localStorage.getItem('title');
        //         const description = localStorage.getItem('description');

        //         const response = await fetch('https://api.commerce.coinbase.com/charges', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'X-CC-Api-Key': '3a2f5458-0d9d-4eca-9a11-2df3b5a4b9ab',
        //                 'X-CC-Version': '2018-03-22',
        //             },
        //             body: JSON.stringify({
        //                 name: title,
        //                 description: description,
        //                 pricing_type: 'fixed_price', // or 'no_price' or other valid value
        //                 local_price: {
        //                     amount: totalCartPrice, // Use the totalCartPrice as the amount
        //                     currency: 'USD', // Specify your desired currency (USD for US Dollars)
        //                 },
        //                 // Add other charge details here
        //             }),
        //         });

        //         if (response.ok) {
        //             const charge = await response.json();
        //             // Extract the checkout ID from the hosted URL
        //             const chargeId = charge.data.hosted_url;
        //             const parts = chargeId.split("/");
        //             const lastPart = parts[parts.length - 1];

        //             // Redirect the user to the Coinbase Commerce checkout page
        //             window.location.href = `https://commerce.coinbase.com/checkout/${lastPart}`;
        //         } else {
        //             console.error('Error creating Coinbase Commerce charge:', response.statusText);
        //         }
        //     } catch (error) {
            //         console.error('Error creating Coinbase Commerce charge:', error);
            //     }
            // }
        setShowAlerts2(true);
        setTimeout(() => { 
            setShowAlerts2(false);
        }, 3000);

        }
        
    return (
        <>
            {showAlerts && <Alert type="danger" msg="Product has been Successfully Removed!" />}
            {showAlerts1 && <Alert type="warning" msg="Please Log In Before Check Out" />}
            {showAlerts2 && <Alert type="danger" msg="Payment feature is On hold" />}

            <div className="container my-5">
                <table className="table table-dark">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">sr no.</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCart.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="table-dark">{item.title}</td>
                                <td className="table-dark">{item.quantity}</td>
                                <td className="table-dark">{item.totalPrice || ""}</td>
                                <td className="table-dark">
                                    <FontAwesomeIcon
                                        icon={faTrashCan} size="xl"
                                        style={{ cursor: "pointer", color: "#d10000" }}
                                        onClick={() => handleDelete(index)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total:</td>
                            <td></td>
                            <td></td>
                            <td className="table-dark">{totalCartPrice ? totalCartPrice : ""}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div>
                    <button
                        type="button"
                        disabled={filteredCart.length === 0 ? true : false}
                        className="btn button"
                        onClick={() => {
                            checklog();
                            handlePayment()
                        }}
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShowCart1;
