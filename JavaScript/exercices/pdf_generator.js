// Exercise: PDF Generator

// Description: Generate a PDF file (with jsPDF).

function generatePDF(text) {
  const doc = new jsPDF();
  doc.text(text, 10, 10);
  doc.save('file.pdf');
}

// Test the function
// generatePDF('Hello World');
