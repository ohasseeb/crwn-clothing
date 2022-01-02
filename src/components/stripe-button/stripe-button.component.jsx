import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // caveat about the price, stripe wants it in cents but we have USD
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KDLBDCrfDsnPQWt4jCtQLpzUotjs1ZAw6efPyhHyV1ELMSwjvzRNCW0O9DUgLMEfKS04a93knXKlmIdG9GeLnXi00Rjzd9Le7";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
