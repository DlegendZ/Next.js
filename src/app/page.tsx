export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="title">Belajar Next.js + globals.css</h1>
        <p className="subtitle">
          Semua styling diatur dari satu file CSS global.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#fitur">Lihat Fitur</a>
          <a className="btn btn-ghost" href="#kontak">Hubungi</a>
        </div>
      </section>

      <section id="fitur" className="section">
        <h2 className="section-title">Fitur Sederhana</h2>
        <div className="grid">
          <article className="card">
            <h3 className="card-title">Routing</h3>
            <p className="card-text">
              Halaman ini adalah <code>app/page.tsx</code>. Tambah folder untuk route baru.
            </p>
          </article>
          <article className="card">
            <h3 className="card-title">Styling Global</h3>
            <p className="card-text">
              Class seperti <code>.btn</code>, <code>.card</code> ditulis di <code>globals.css</code>.
            </p>
          </article>
          <article className="card">
            <h3 className="card-title">Responsif</h3>
            <p className="card-text">
              Grid sederhana pakai media query di file CSS global.
            </p>
          </article>
        </div>
      </section>

      <section id="kontak" className="section section-muted">
        <h2 className="section-title">Kontak</h2>
        <p className="muted">
          Ini hanya contoh tampilan. Ubah teks dan gaya dari <code>globals.css</code>.
        </p>
      </section>
    </>
  );
}
