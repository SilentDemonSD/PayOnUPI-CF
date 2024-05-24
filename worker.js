addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

function paymentHTML(qrImageUrl, upiId) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #440a67, #330867, #200441);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        max-width: 450px;
        padding: 30px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 16px;
        box-shadow: 0 0 30px rgba(255, 0, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.8), inset 0 0 20px rgba(255, 0, 255, 0.5);
      }

      h1 {
        text-align: center;
        margin-bottom: 30px;
      }

      #qrCode {
        text-align: center;
        margin-top: 30px;
        border: 2px solid #6b146d;
        padding: 10px;
        border-radius: 8px;
        background-color: #330867;
      }

      #qrCode img {
        max-width: 100%;
        height: auto;
      }

      #payButton {
        text-align: center;
        margin-top: 30px;
      }

      #payButton a {
        color: #fff;
        text-decoration: none;
        border: none;
        padding: 15px 30px;
        border-radius: 8px;
        background: linear-gradient(135deg, #ae5aea, #6b146d);
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3);
        display: inline-block;
        font-weight: 600;
      }

      #payButton a:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.6), 0 14px 32px rgba(0, 0, 0, 0.4);
      }

      .upiId {
        text-align: center;
        margin-top: 20px;
        font-size: 18px;
        font-weight: 600;
        border: 2px solid #6b146d;
        padding: 10px;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Pay Me</h1>
      <div id="qrCode">
        <img src="${qrImageUrl}" alt="QR Code" draggable="false">
      </div>
      <div class="upiId">UPI ID: ${upiId}</div>
      <div id="payButton">
        <a href="upi://pay?pa=928282727@ybl&pn=&cu=INR&am=250" id="payLink">Click Here to Pay</a>
      </div>
    </div>
    <script>
      // Remove query parameters from the URL
      history.replaceState({}, document.title, location.pathname);
    </script>
  </body>
  </html>
  `;
}

async function generateQR(request) {
  const params = new URL(request.url).searchParams;
  const upiId = params.get('pa');
  const amount = params.get('am');
  const currency = params.get('cu');

  const upiLink = `upi://pay?pa=${upiId}&am=${amount}&cu=${currency}`;
  const qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiLink)}&size=200x200`;

  return { qrImageUrl: qrDataUrl, upiId: upiId };
}

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === '/pay') {
    const { qrImageUrl, upiId } = await generateQR(request);
    const paymentPageHTML = paymentHTML(qrImageUrl, upiId);
    return new Response(paymentPageHTML, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else {
    return new Response('404 Not Found', { status: 404 });
  }
}
