import { useState } from "react";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Verifikasi kredensial admin
    if (email === "admin.kim@gmail.com" && password === "kimkantor1") {
      setIsLoggedIn(true);
      setMessage("Login berhasil!");
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("role", "admin");
    } else {
      setMessage("Email atau password salah!");
    }
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-base-200 p-8">
        <div className="card bg-base-100 shadow-xl p-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Dashboard Admin Kimglass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="stat bg-base-200 rounded-lg p-4">
              <div className="stat-title">Total Produk</div>
              <div className="stat-value">42</div>
              <div className="stat-desc">Produk glassware</div>
            </div>
            
            <div className="stat bg-base-200 rounded-lg p-4">
              <div className="stat-title">Pengunjung</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↗︎ 40 (2%)</div>
            </div>
          </div>
          
          <div className="divider">Menu Admin</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn btn-primary">Kelola Produk</button>
            <button className="btn btn-secondary">Kelola Pesanan</button>
            <button className="btn btn-accent">Laporan Penjualan</button>
          </div>
          
          <div className="mt-8">
            <button 
              className="btn btn-outline btn-error"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Admin Kimglass</h2>
          <p className="text-sm text-gray-500">Silakan login untuk mengakses panel admin</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Admin"
            className="input input-bordered w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button className="btn btn-primary w-full">Login Admin</button>
          
          {message && (
            <div className={`mt-3 text-center text-sm ${message.includes("berhasil") ? "text-success" : "text-error"}`}>
              {message}
            </div>
          )}
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Email: admin.kim@gmail.com</p>
            <p>Password: kimkantor1</p>
          </div>
        </form>
      </div>
    </div>
  );
}