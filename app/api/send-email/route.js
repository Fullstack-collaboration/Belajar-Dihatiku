import nodemailer from 'nodemailer';

// Fungsi untuk menangani request POST
export async function POST(req) {
  try {
    const { email } = await req.json();

    // Buat transporter untuk mengirim email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Masukkan email Gmail-mu di file .env
        pass: process.env.EMAIL_PASS,  // Masukkan password email Gmail-mu di file .env
      },
    });

    // Opsi pengiriman email
    const mailOptions = {
        from: `"BelajarDihatiku Support" <${process.env.EMAIL_USER}>`,  // Nama pengirim yang lebih profesional
        to: email,  // Email tujuan
        subject: 'Konfirmasi Pesan Anda - BelajarDihatiku',  // Subjek yang lebih jelas dan formal
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2FBFE7;">Terima Kasih Telah Menghubungi Kami!</h2>
            <p>Halo,</p>
            <p>Terima kasih telah mengirimkan pesan kepada <strong>BelajarDihatiku.com</strong>. Kami telah menerima email Anda dan akan segera menghubungi Anda kembali.</p>
            <p>Berikut adalah konfirmasi bahwa pesan Anda telah berhasil diterima:</p>
            <ul>
              <li>Email: ${email}</li>
            </ul>
            <p>Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami di <a href="mailto:${process.env.EMAIL_USER}" style="color: #107797;">${process.env.EMAIL_USER}</a>.</p>
            <br/>
            <p>Hormat kami,</p>
            <p><strong>Tim BelajarDihatiku</strong></p>
            <p style="font-size: 12px; color: #999;">BelajarDihatiku.com | Dr. Dedy Hartama, S.T, M.Kom | Semua hak cipta dilindungi © 2024</p>
          </div>
        `,
      };
      

    // Kirim email
    await transporter.sendMail(mailOptions);

    // Mengembalikan respon sukses
    return new Response(JSON.stringify({ message: 'Email terkirim!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan saat mengirim email.' }), { status: 500 });
  }
}
