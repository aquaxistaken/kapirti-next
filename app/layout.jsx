import './globals.css';

export const metadata = {
  title: 'Kapırtı - Dijital Menü Çözümleri',
  description: 'Restoran menülerinizi dijitalleştirin, 170 dilde herkese ulaştırın!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" /> {/* Font Awesome için */}
      </head>
      <body>{children}</body>
    </html>
  );
}