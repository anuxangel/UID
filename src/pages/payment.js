import React, { useState } from 'react';
import '../styles/payment.css'; // Make sure the CSS file path is correct

function Payment({ artwork }) {
  const [paymentMethod, setPaymentMethod] = useState(null); // Tracks the selected payment method
  const [paymentSuccess, setPaymentSuccess] = useState(false); // To manage the payment success state
  const [cardDetails, setCardDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handle the form submission (payment)
  const handlePayment = (e) => {
    e.preventDefault();
    // Check if the user has entered all required card details
    if (cardDetails.name && cardDetails.cardNumber && cardDetails.expiryDate && cardDetails.cvv) {
      setPaymentSuccess(true);
    } else {
      alert("Please fill out all payment details.");
    }
  };

  // Check if artwork is null or undefined
  if (!artwork) {
    return <div>Loading...</div>; // Or a fallback UI while artwork is being fetched
  }

  return (
    <div className="payment-page">
      <h2>Payment for {artwork.title}</h2>
      <img src={artwork.imageUrl} alt={artwork.title} className="artwork-image" />
      <p className="artist-name">Artist: {artwork.artist}</p>
      <p className="price">Price: ${artwork.price}</p>

      <h3>Select Payment Method</h3>
      <div className="payment-methods">
        <button onClick={() => setPaymentMethod('phonepe')} className="payment-option-btn">
          Pay with PhonePe
        </button>
        <button onClick={() => setPaymentMethod('card')} className="payment-option-btn">
          Pay with Card
        </button>
      </div>

      <div className="payment-options">
        {/* Conditionally Render Payment Option */}
        {paymentMethod === 'phonepe' && (
          <div className="qr-code">
            <h4>Scan with PhonePe:</h4>
            <img src="https://catalog.wlimg.com/5/675013/other-images/table-594333.jpeg" alt="PhonePe QR Code" />
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="card-details">
            <h4>Enter Card Details</h4>
            <form onSubmit={handlePayment}>
              <input
                type="text"
                placeholder="Cardholder Name"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={cardDetails.expiryDate}
                onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                required
              />
              <button type="submit" className="google-pay-btn">
                Pay Now
              </button>
            </form>
          </div>
        )}

        {/* Payment Success Message */}
        {paymentSuccess && (
          <div className="payment-success-message">
            <h3>Payment Successful!</h3>
            <p>Your payment has been processed successfully. Thank you for your purchase.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
