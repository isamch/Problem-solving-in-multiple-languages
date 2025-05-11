// Exercise: QR Code Generator

// Description: Generate QR code using an external library.

function generateQR(text) {
  // Use qrcode library
  QRCode.toCanvas(document.getElementById('canvas'), text);
}

// Test the function
// generateQR('https://example.com');
