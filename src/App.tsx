import { useState, type ReactNode } from "react";

type IconName =
  | "alert"
  | "arrow"
  | "camera"
  | "chart"
  | "check"
  | "chevron"
  | "clock"
  | "cloud"
  | "download"
  | "eye"
  | "file"
  | "fire"
  | "history"
  | "home"
  | "layers"
  | "leaf"
  | "location"
  | "logout"
  | "map"
  | "menu"
  | "offline"
  | "patrol"
  | "photo"
  | "plus"
  | "rain"
  | "search"
  | "shield"
  | "sun"
  | "team"
  | "trend"
  | "user"
  | "wifi"
  | "x";

const paths: Record<IconName, ReactNode> = {
  alert: <><path d="M12 9v4m0 4h.01"/><path d="M10.3 3.6 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z"/></>,
  arrow: <><path d="m9 18 6-6-6-6"/></>,
  camera: <><path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5Z"/><circle cx="12" cy="13" r="3"/></>,
  chart: <><path d="M4 19V9m6 10V5m6 14v-7m4 7H2"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  cloud: <path d="M17.5 19H6a4 4 0 1 1 1.1-7.8A6 6 0 0 1 18.7 9a5 5 0 0 1-1.2 10Z"/>,
  download: <><path d="M12 3v12m-4-4 4 4 4-4"/><path d="M4 19h16"/></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
  file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6m-6 4h6"/></>,
  fire: <path d="M13 2c1 4-2 5-2 8 0 2 1 3 3 3 3 0 4-3 3-6 3 2 5 5 5 8a9 9 0 0 1-18 0c0-4 2-7 6-10-1 4 1 5 3 5 2-2 1-5 0-8Z"/>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5m4-1v5l3 2"/></>,
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5m-18 4 9 5 9-5"/></>,
  leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M4 21c2-5 6-9 12-12"/></>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  logout: <><path d="M10 4H4v16h6m5-4 4-4-4-4m4 4H9"/></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15m6-12v15"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  offline: <><path d="m3 3 18 18M8.5 12.5A6 6 0 0 0 6 14m12 0a10 10 0 0 0-6-2c-.5 0-1 0-1.4.1M3 9a15 15 0 0 1 2.4-1.2M8 5.4A16 16 0 0 1 21 9m-9 9h.01"/></>,
  patrol: <><path d="M5 21v-4a7 7 0 0 1 14 0v4"/><circle cx="12" cy="7" r="4"/><path d="M8 21h8"/></>,
  photo: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 15-5-5L5 20"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  rain: <><path d="M17 15H7a4 4 0 1 1 1-7.8A5.5 5.5 0 0 1 18.5 9 3.5 3.5 0 0 1 17 15Z"/><path d="m8 18-1 2m5-2-1 2m5-2-1 2"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-5"/></>,
  sun: <><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
  team: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m1-6a5 5 0 0 1 5 5v1"/></>,
  trend: <><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01"/></>,
  x: <path d="m6 6 12 12M18 6 6 18"/>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Button({ children, onClick, variant = "primary", icon, wide, type = "button" }: { children: ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "danger" | "ghost" | "confirm"; icon?: IconName; wide?: boolean; type?: "button" | "submit" }) {
  return <button type={type} className={`btn btn-${variant}${wide ? " btn-wide" : ""}`} onClick={onClick}>{icon && <Icon name={icon} size={18}/>}<span>{children}</span></button>;
}

function Field({ label, placeholder, type = "text", icon }: { label: string; placeholder: string; type?: string; icon?: IconName }) {
  return <label className="field"><span>{label}</span><div className="input-wrap">{icon && <Icon name={icon} size={18}/>}<input type={type} placeholder={placeholder}/></div></label>;
}

function SelectField({ label, children }: { label: string; children: ReactNode }) {
  return <label className="field"><span>{label}</span><div className="input-wrap"><select>{children}</select><Icon name="chevron" size={17}/></div></label>;
}

function Logo({ light = false }: { light?: boolean }) {
  return <div className={`logo ${light ? "logo-light" : ""}`}><div className="logo-mark"><Icon name="leaf" size={25}/><span className="signal signal-a"/><span className="signal signal-b"/></div><div><div className="logo-name">SIPP Karhutla</div><div className="logo-sub">Sistem Informasi Patroli</div></div></div>;
}

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "danger" | "warning" | "success" | "info" | "neutral" }) {
  return <span className={`badge badge-${tone}`}><span className="badge-dot"/>{children}</span>;
}

function SectionTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return <div className="section-title"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<div className="title">{title}</div></div>{action}</div>;
}

function MapVisual({ detailed = false, active = false }: { detailed?: boolean; active?: boolean }) {
  return <div className={`map-visual${detailed ? " map-detailed" : ""}`}>
    <svg viewBox="0 0 800 440" preserveAspectRatio="none" className="map-base" aria-label="Peta risiko kebakaran wilayah Riau">
      <rect width="800" height="440" fill="#e8eee8"/>
      <path d="M0 90C120 55 210 120 320 75S540 22 800 68M0 280c150-38 215 35 365-18s240-30 435-80M175 0c5 120 60 175 22 440M570 0c-15 110 38 190 15 440" stroke="#fff" strokeWidth="17" fill="none"/>
      <path d="M0 90C120 55 210 120 320 75S540 22 800 68M0 280c150-38 215 35 365-18s240-30 435-80M175 0c5 120 60 175 22 440M570 0c-15 110 38 190 15 440" stroke="#cdd8d0" strokeWidth="2" fill="none"/>
      <path d="m332 84 92-15 61 54-22 84-84 31-80-47-12-69Z" fill="#efb0a0" opacity=".76"/>
      <path d="m76 125 101-29 67 69-36 81-112 7-52-57Z" fill="#f4d497" opacity=".86"/>
      <path d="m588 225 108-38 74 63-18 106-123 36-82-72Z" fill="#a8d8b8" opacity=".85"/>
      <path d="m333 285 80-29 67 46-9 76-91 35-72-56Z" fill="#f4d497" opacity=".8"/>
      <g fill="#8da99a" opacity=".55"><circle cx="88" cy="355" r="17"/><circle cx="125" cy="385" r="13"/><circle cx="530" cy="130" r="20"/><circle cx="730" cy="110" r="16"/><circle cx="245" cy="65" r="11"/></g>
      {active && <path d="M116 345c50-30 112-20 158-56s72-10 105-47" stroke="#087a55" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="6 10"/>}
    </svg>
    <div className="zone zone-high"><span>Tinggi</span><strong>82%</strong></div>
    <div className="zone zone-medium"><span>Sedang</span><strong>61%</strong></div>
    <div className="zone zone-low"><span>Rendah</span><strong>24%</strong></div>
    <div className="map-marker marker-team"><Icon name="team" size={15}/></div>
    <div className="map-marker marker-team marker-team-b"><Icon name="team" size={15}/></div>
    {detailed && <><div className="map-marker marker-fire"><Icon name="fire" size={16}/></div><div className="map-marker marker-fire marker-fire-b"><Icon name="fire" size={16}/></div></>}
    {active && <div className="map-marker marker-me"><span/></div>}
    <div className="map-tools"><div><Icon name="plus" size={17}/></div><div className="minus">−</div><div><Icon name="layers" size={17}/></div></div>
    <div className="map-label label-a">Kec. Sungai Apit</div><div className="map-label label-b">Siak</div><div className="map-label label-c">Pelalawan</div>
  </div>;
}

type MobileScreen = "home" | "risk" | "start" | "active" | "finding" | "smoke" | "alerts" | "verify" | "history";
type WebScreen = "dashboard" | "riskmap" | "alerts" | "patrol" | "reports";

function Login({ onLogin }: { onLogin: (role: "field" | "admin") => void }) {
  const [role, setRole] = useState<"field" | "dinas" | "bpbd">("field");
  return <div className="login-page">
    <div className="login-brand">
      <div className="brand-glow"/>
      <div className="login-brand-inner">
        <Logo light/>
        <div className="brand-copy">
          <div className="brand-kicker">Satu data. Satu tindakan.</div>
          <div className="brand-title">Lindungi hutan,<br/>cegah sebelum terjadi.</div>
          <div className="brand-description">Sistem terpadu untuk patroli lapangan, prediksi risiko berbasis AI, dan respons dini kebakaran hutan dan lahan.</div>
        </div>
        <div className="brand-stats">
          <div><strong>12</strong><span>Tim aktif</span></div>
          <div><strong>98.4%</strong><span>Data tersinkron</span></div>
          <div><strong>24/7</strong><span>Monitoring</span></div>
        </div>
      </div>
    </div>
    <div className="login-panel">
      <div className="login-box">
        <div className="mobile-logo"><Logo/></div>
        <div className="login-heading">Selamat datang</div>
        <div className="login-lead">Masuk ke pusat informasi patroli Karhutla</div>
        <div className="role-tabs">
          <button className={role === "field" ? "active" : ""} onClick={() => setRole("field")}><Icon name="patrol" size={18}/>Petugas</button>
          <button className={role === "dinas" ? "active" : ""} onClick={() => setRole("dinas")}><Icon name="shield" size={18}/>Dinas</button>
          <button className={role === "bpbd" ? "active" : ""} onClick={() => setRole("bpbd")}><Icon name="alert" size={18}/>BPBD</button>
        </div>
        <div className="login-fields">
          <Field label="Email atau nama pengguna" placeholder="nama@instansi.go.id" icon="user"/>
          <Field label="Kata sandi" placeholder="Masukkan kata sandi" type="password" icon="shield"/>
        </div>
        <div className="login-options"><label><input type="checkbox" defaultChecked/> Ingat saya</label><span>Lupa kata sandi?</span></div>
        <Button wide onClick={() => onLogin(role === "field" ? "field" : "admin")}>Masuk ke SIPP <Icon name="arrow" size={18}/></Button>
        <div className="security-note"><Icon name="shield" size={16}/>Akses terenkripsi dan dilindungi sistem pemerintah</div>
      </div>
      <div className="login-footer">Kementerian Lingkungan Hidup dan Kehutanan · Versi 2.4.0</div>
    </div>
  </div>;
}

function MobileHeader({ title, back, onBack, right }: { title?: string; back?: boolean; onBack?: () => void; right?: ReactNode }) {
  return <div className="mobile-header">{back ? <button className="icon-btn" onClick={onBack}><span className="back-arrow">‹</span></button> : <Logo/>}<div className="mobile-header-title">{title}</div><div className="header-right">{right}</div></div>;
}

function BottomNav({ screen, go }: { screen: MobileScreen; go: (s: MobileScreen) => void }) {
  return <div className="bottom-nav">
    <button className={screen === "home" || screen === "risk" ? "active" : ""} onClick={() => go("home")}><Icon name="home"/><span>Beranda</span></button>
    <button className={["start","active","finding","history"].includes(screen) ? "active" : ""} onClick={() => go("start")}><Icon name="patrol"/><span>Patroli</span></button>
    <button className={["alerts","smoke","verify"].includes(screen) ? "active" : ""} onClick={() => go("alerts")}><span className="nav-alert-dot"/><Icon name="alert"/><span>Peringatan</span></button>
  </div>;
}

function MobileHome({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen">
    <div className="mobile-home-head">
      <div><div className="greeting">Selamat datang,</div><div className="officer-name">Petugas Arif</div><div className="location-line"><Icon name="location" size={14}/> Sungai Apit, Kab. Siak</div></div>
      <div className="avatar">AR<span/></div>
    </div>
    <div className="sync-strip"><span><Icon name="wifi" size={14}/> Online</span><span>Sinkron terakhir 10:42 WIB</span></div>
    <div className="mobile-content home-content">
      <SectionTitle eyebrow="PETA MONITORING" title="Risiko di sekitar Anda" action={<button className="round-action"><Icon name="layers" size={17}/></button>}/>
      <MapVisual/>
      <div className="legend"><span><i className="low"/>Rendah</span><span><i className="medium"/>Sedang</span><span><i className="high"/>Tinggi</span></div>
      <div className="risk-card">
        <div className="risk-card-top"><div className="risk-icon"><Icon name="fire" size={22}/></div><div><Badge tone="danger">RISIKO TINGGI</Badge><div className="risk-region">Kecamatan Sungai Apit</div></div><div className="risk-score"><strong>82</strong><span>/100</span></div></div>
        <div className="risk-factors">
          <div><Icon name="sun" size={18}/><span>Tanpa hujan<strong>8 hari</strong></span></div>
          <div><Icon name="leaf" size={18}/><span>Jenis lahan<strong>Gambut</strong></span></div>
          <div><Icon name="fire" size={18}/><span>Hotspot<strong>Tinggi</strong></span></div>
        </div>
        <Button wide onClick={() => go("risk")}>Lihat Detail Risiko</Button>
      </div>
      <div className="quick-row"><button onClick={() => go("start")}><span><Icon name="patrol"/></span><div>Mulai Patroli<small>Aktifkan GPS</small></div><Icon name="arrow" size={18}/></button><button onClick={() => go("alerts")}><span><Icon name="alert"/></span><div>Peringatan<small>3 belum dibaca</small></div><Icon name="arrow" size={18}/></button></div>
    </div>
    <BottomNav screen="home" go={go}/>
  </div>;
}

function RiskDetail({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen detail-bg"><MobileHeader title="Detail Risiko" back onBack={() => go("home")}/>
    <div className="mobile-content">
      <div className="region-meta"><span><Icon name="location" size={15}/> Sungai Apit, Kabupaten Siak</span><small>12 Jun 2025 · 10:40 WIB</small></div>
      <div className="ai-result-card">
        <div className="ai-label"><span><Icon name="trend" size={16}/> PREDIKSI AI</span><Badge tone="danger">TINGGI</Badge></div>
        <div className="gauge-wrap"><div className="gauge"><div className="gauge-center"><strong>82%</strong><span>skor risiko</span></div></div></div>
        <div className="confidence"><Icon name="check" size={15}/><span>Confidence model</span><strong>91%</strong></div>
      </div>
      <SectionTitle eyebrow="FAKTOR PREDIKSI" title="3 faktor utama yang memengaruhi"/>
      <div className="factor-list">
        <div><span className="factor-icon hot"><Icon name="sun"/></span><div><span>Hari tanpa hujan</span><strong>8 hari</strong><small>+34% pengaruh risiko</small></div><div className="mini-bar"><i className="w-80"/></div></div>
        <div><span className="factor-icon earth"><Icon name="leaf"/></span><div><span>Jenis lahan</span><strong>Gambut</strong><small>+29% pengaruh risiko</small></div><div className="mini-bar"><i className="w-70"/></div></div>
        <div><span className="factor-icon red"><Icon name="fire"/></span><div><span>Riwayat hotspot</span><strong>Tinggi</strong><small>6 hotspot / 30 hari</small></div><div className="mini-bar"><i className="w-60"/></div></div>
      </div>
      <div className="ai-disclaimer"><Icon name="alert" size={19}/><span><strong>Perlu verifikasi petugas</strong>Hasil AI merupakan probabilitas dan bukan keputusan akhir.</span></div>
      <div className="stack-actions"><Button wide onClick={() => go("start")} icon="patrol">Mulai Patroli</Button><Button wide variant="secondary" onClick={() => go("alerts")} icon="alert">Buat Peringatan</Button></div>
    </div>
  </div>;
}

function StartPatrol({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen detail-bg"><MobileHeader title="Mulai Patroli" back onBack={() => go("home")} right={<button className="text-link" onClick={() => go("history")}>Riwayat</button>}/>
    <div className="mobile-content patrol-start">
      <div className="gps-orbit"><span className="pulse p1"/><span className="pulse p2"/><div><Icon name="location" size={30}/></div></div>
      <div className="gps-title">Lokasi GPS ditemukan</div><div className="gps-address">Desa Teluk Lanus, Sungai Apit<br/>Kabupaten Siak, Riau</div>
      <div className="coordinate">0.81264° N, 102.31782° E <span>Akurasi ± 4 m</span></div>
      <div className="patrol-info-grid"><div><Icon name="clock"/><span>Waktu mulai<strong>10:48 WIB</strong></span></div><div><Icon name="team"/><span>Tim patroli<strong>MA Regu 03</strong></span></div><div><Icon name="wifi"/><span>Status jaringan<strong className="green">Online</strong></span></div><div><Icon name="shield"/><span>GPS<strong className="green">Akurat</strong></span></div></div>
      <div className="offline-note"><Icon name="offline"/><span><strong>Siap digunakan offline</strong>Data tetap tersimpan dan akan disinkronkan saat koneksi tersedia.</span></div>
      <Button wide onClick={() => go("active")} icon="patrol">MULAI PATROLI</Button>
      <div className="tap-hint">Tekan tombol untuk mulai merekam rute GPS</div>
    </div><BottomNav screen="start" go={go}/>
  </div>;
}

function ActivePatrol({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen"><div className="active-head"><div><span className="live-dot"/> PATROLI AKTIF</div><Badge tone="success">ONLINE</Badge></div>
    <div className="active-map"><MapVisual active/><div className="live-card"><div><span>Durasi</span><strong>01:24:18</strong></div><div><span>Jarak</span><strong>4.7 km</strong></div><div><span>GPS</span><strong className="green">Akurat</strong></div></div></div>
    <div className="mobile-content active-actions">
      <div className="route-status"><span><Icon name="location" size={18}/> Rute sedang direkam</span><small>47 titik GPS tersimpan</small></div>
      <Button wide onClick={() => go("finding")} icon="plus">CATAT TEMUAN</Button>
      <Button wide variant="secondary" onClick={() => go("finding")} icon="camera">AMBIL FOTO</Button>
      <Button wide variant="ghost" onClick={() => go("history")}>AKHIRI PATROLI</Button>
    </div>
  </div>;
}

function FindingForm({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen detail-bg"><MobileHeader title="Catat Temuan" back onBack={() => go("active")}/>
    <div className="mobile-content form-content">
      <div className="photo-upload"><Icon name="camera" size={30}/><strong>Ambil atau unggah foto</strong><span>Foto membantu AI mendeteksi indikasi asap</span><Button variant="secondary" icon="camera">Buka Kamera</Button></div>
      <div className="auto-meta"><div><Icon name="location" size={18}/><span>Koordinat GPS<strong>0.81264 N, 102.31782 E</strong></span><Badge tone="success">OTOMATIS</Badge></div><div><Icon name="clock" size={18}/><span>Waktu temuan<strong>12 Jun 2025 · 12:12 WIB</strong></span></div></div>
      <SelectField label="Kategori temuan"><option>Asap</option><option>Api</option><option>Vegetasi Kering</option><option>Aktivitas Manusia</option><option>Lainnya</option></SelectField>
      <label className="field"><span>Catatan lapangan</span><textarea placeholder="Jelaskan kondisi yang ditemukan..." rows={4}/><small>Tambahkan detail arah angin, luas area, atau kondisi sekitar.</small></label>
      <div className="ai-ready"><span><Icon name="eye" size={21}/></span><div><strong>Deteksi asap berbasis AI</strong><small>Analisis otomatis berjalan setelah foto ditambahkan.</small></div></div>
      <Button wide onClick={() => go("smoke")} icon="check">SIMPAN TEMUAN</Button>
    </div>
  </div>;
}

const smokePhoto = "https://images.unsplash.com/photo-1512631911403-3e3a06d12389?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1080";

function SmokeResult({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen dark-top"><MobileHeader title="Hasil Analisis Foto" back onBack={() => go("finding")}/>
    <div className="smoke-image"><img src={smokePhoto} alt="Foto lapangan area hutan dengan indikasi asap"/><div className="bounding-box"><span>Indikasi asap · 87%</span></div><div className="photo-meta">Foto lapangan · MA Regu 03</div></div>
    <div className="mobile-content smoke-content">
      <div className="detection-result"><div className="detect-icon"><Icon name="cloud" size={26}/></div><div><Badge tone="danger">TERDETEKSI</Badge><div className="detect-title">Indikasi Asap Terdeteksi</div><span>Confidence model <strong>87%</strong></span></div></div>
      <div className="confidence-bar"><i/><span>0%</span><span>Ambang deteksi 65%</span><span>100%</span></div>
      <div className="result-meta"><div><Icon name="location"/><span>Lokasi<strong>Desa Teluk Lanus, Sungai Apit</strong></span></div><div><Icon name="clock"/><span>Waktu<strong>12 Jun 2025 · 12:12 WIB</strong></span></div></div>
      <div className="ai-disclaimer"><Icon name="alert" size={19}/><span><strong>AI bukan keputusan akhir</strong>Temuan wajib diverifikasi oleh petugas di lapangan.</span></div>
      <Button wide variant="danger" onClick={() => go("alerts")} icon="alert">KIRIM PERINGATAN</Button>
      <Button wide variant="secondary" onClick={() => go("verify")} icon="shield">VERIFIKASI LAPANGAN</Button>
    </div>
  </div>;
}

const alertItems = [
  { icon: "fire" as IconName, title: "Risiko Kebakaran Tinggi", place: "Kec. Sungai Apit, Siak", time: "5 menit lalu", level: "TINGGI", tone: "danger", status: "Belum diverifikasi" },
  { icon: "cloud" as IconName, title: "Indikasi Asap Terdeteksi", place: "Area Patroli 03 · Teluk Lanus", time: "12 menit lalu", level: "KRITIS", tone: "danger", status: "Perlu verifikasi" },
  { icon: "fire" as IconName, title: "Kenaikan Risiko Area", place: "Kec. Kerumutan, Pelalawan", time: "48 menit lalu", level: "SEDANG", tone: "warning", status: "Dipantau" },
  { icon: "check" as IconName, title: "Verifikasi Selesai", place: "Kec. Kandis, Siak", time: "2 jam lalu", level: "RENDAH", tone: "success", status: "False alarm" },
];

function AlertList({ go }: { go: (s: MobileScreen) => void }) {
  return <div className="mobile-screen detail-bg"><MobileHeader title="Peringatan" right={<button className="round-action"><Icon name="search" size={18}/></button>}/>
    <div className="mobile-content alert-page"><div className="alert-summary"><div><strong>3</strong><span>Aktif</span></div><div><strong>2</strong><span>Perlu verifikasi</span></div><div><strong>1</strong><span>Kritis</span></div></div>
      <div className="filter-pills"><button className="active">Semua</button><button>Belum dibaca</button><button>Terverifikasi</button></div>
      <div className="alert-list">{alertItems.map((a, i) => <button className="alert-card" key={a.title} onClick={() => i < 2 && go("verify")}><span className={`alert-card-icon ${a.tone}`}><Icon name={a.icon}/></span><div className="alert-card-copy"><div><Badge tone={a.tone as "danger" | "warning" | "success"}>{a.level}</Badge><small>{a.time}</small></div><strong>{a.title}</strong><span><Icon name="location" size={13}/>{a.place}</span><em>{a.status}</em></div><Icon name="arrow" size={18}/></button>)}</div>
    </div><BottomNav screen="alerts" go={go}/>
  </div>;
}

function VerifyAlert({ go }: { go: (s: MobileScreen) => void }) {
  const [choice, setChoice] = useState<"true" | "false" | null>(null);
  return <div className="mobile-screen detail-bg"><MobileHeader title="Verifikasi Peringatan" back onBack={() => go("alerts")}/>
    <div className="mobile-content verify-page">
      <div className="verify-status"><Badge tone="danger">PERLU VERIFIKASI</Badge><span>ID #ALT-250612-047</span></div>
      <div className="verify-title">Indikasi Asap Terdeteksi</div><div className="region-meta"><span><Icon name="location" size={15}/> Desa Teluk Lanus, Sungai Apit</span><small>12 Jun 2025 · 12:12 WIB</small></div>
      <div className="verify-map"><MapVisual/></div>
      <div className="mini-photo"><img src={smokePhoto} alt="Foto indikasi asap"/><div><Icon name="eye" size={16}/> Confidence AI <strong>87%</strong></div></div>
      <div className="mini-factors"><span><small>Tanpa hujan</small><strong>8 hari</strong></span><span><small>Jenis lahan</small><strong>Gambut</strong></span><span><small>Risiko area</small><strong className="red-text">Tinggi</strong></span></div>
      <SectionTitle eyebrow="KEPUTUSAN PETUGAS" title="Verifikasi Lapangan"/>
      <div className="verify-actions"><button className={choice === "true" ? "selected confirm" : ""} onClick={() => setChoice("true")}><Icon name="check" size={24}/><span>BENAR<strong>Terkonfirmasi</strong></span></button><button className={choice === "false" ? "selected reject" : ""} onClick={() => setChoice("false")}><Icon name="x" size={24}/><span>SALAH<strong>False alarm</strong></span></button></div>
      <label className="field"><span>Catatan verifikasi</span><textarea rows={3} placeholder="Tuliskan hasil pengamatan lapangan..."/></label>
      <Button wide variant={choice === "true" ? "confirm" : "primary"} onClick={() => go("alerts")}>KIRIM HASIL VERIFIKASI</Button>
      <div className="tap-hint">Keputusan petugas menjadi hasil akhir sistem</div>
    </div>
  </div>;
}

function PatrolHistory({ go }: { go: (s: MobileScreen) => void }) {
  const histories = [
    ["12 Jun 2025", "MA Regu 03", "01j 24m", "Teluk Lanus", "1 temuan", "Tersinkron"],
    ["10 Jun 2025", "MA Regu 03", "03j 12m", "Sungai Rawa", "0 temuan", "Tersinkron"],
    ["08 Jun 2025", "KPH Siak 02", "02j 48m", "Kec. Dayun", "2 temuan", "Tersinkron"],
    ["05 Jun 2025", "MA Regu 03", "01j 56m", "Bunsur", "1 temuan", "Menunggu"],
  ];
  return <div className="mobile-screen detail-bg"><MobileHeader title="Riwayat Patroli" back onBack={() => go("start")}/>
    <div className="mobile-content history-page"><div className="history-month"><span>Juni 2025</span><Badge tone="info">4 PATROLI</Badge></div>{histories.map((h, i) => <button className="history-card" key={h[0]} onClick={() => i === 0 && go("active")}><div className="history-date"><strong>{h[0].split(" ")[0]}</strong><span>JUN</span></div><div className="history-data"><strong>{h[3]}</strong><span><Icon name="team" size={13}/>{h[1]}</span><div><small><Icon name="clock" size={12}/>{h[2]}</small><small><Icon name="file" size={12}/>{h[4]}</small></div></div><Badge tone={h[5] === "Tersinkron" ? "success" : "warning"}>{h[5]}</Badge></button>)}</div><BottomNav screen="history" go={go}/></div>;
}

function MobileApp({ onLogout }: { onLogout: () => void }) {
  const [screen, setScreen] = useState<MobileScreen>("home");
  const content = { home: <MobileHome go={setScreen}/>, risk: <RiskDetail go={setScreen}/>, start: <StartPatrol go={setScreen}/>, active: <ActivePatrol go={setScreen}/>, finding: <FindingForm go={setScreen}/>, smoke: <SmokeResult go={setScreen}/>, alerts: <AlertList go={setScreen}/>, verify: <VerifyAlert go={setScreen}/>, history: <PatrolHistory go={setScreen}/> }[screen];
  return <div className="prototype-stage"><div className="prototype-toolbar"><Logo/><div className="flow-title"><span>PROTOTYPE MOBILE</span>Alur Petugas Lapangan</div><div className="screen-jump"><button onClick={() => setScreen("home")}>Beranda</button><button onClick={() => setScreen("start")}>Patroli</button><button onClick={() => setScreen("alerts")}>Peringatan</button></div><Button variant="ghost" onClick={onLogout} icon="logout">Keluar</Button></div><div className="phone-shell">{content}</div><div className="prototype-note"><Icon name="shield" size={16}/> Mode presentasi interaktif · Seluruh alur dapat diklik</div></div>;
}

const navItems: { id: WebScreen; label: string; icon: IconName }[] = [
  { id: "dashboard", label: "Beranda", icon: "home" }, { id: "riskmap", label: "Peta Risiko", icon: "map" }, { id: "patrol", label: "Patroli", icon: "patrol" }, { id: "alerts", label: "Peringatan", icon: "alert" }, { id: "reports", label: "Laporan", icon: "file" },
];

function Sidebar({ screen, go, logout }: { screen: WebScreen; go: (s: WebScreen) => void; logout: () => void }) {
  return <aside className="sidebar"><Logo light/><div className="sidebar-caption">PUSAT MONITORING</div><nav>{navItems.map(n => <button key={n.id} className={screen === n.id ? "active" : ""} onClick={() => go(n.id)}><Icon name={n.icon}/><span>{n.label}</span>{n.id === "alerts" && <em>5</em>}</button>)}</nav><div className="sidebar-bottom"><div className="system-health"><span><i/> Sistem Operasional</span><small>Semua layanan normal</small></div><button onClick={logout}><Icon name="logout"/><span>Keluar</span></button></div></aside>;
}

function WebHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return <header className="web-header"><div><div className="web-title">{title}</div><div className="web-subtitle">{subtitle}</div></div><div className="web-header-actions"><div className="search-box"><Icon name="search" size={18}/><input placeholder="Cari wilayah, tim, atau alert..."/></div><button className="notification"><Icon name="alert"/><span>5</span></button><div className="admin-avatar">BS</div><div className="admin-name"><strong>Budi Santoso</strong><span>Operator Dinas LHK</span></div><Icon name="chevron" size={16}/></div></header>;
}

function StatCard({ label, value, note, icon, tone }: { label: string; value: string; note: string; icon: IconName; tone: string }) {
  return <div className="stat-card"><div className={`stat-icon ${tone}`}><Icon name={icon}/></div><div className="stat-card-main"><span>{label}</span><strong>{value}</strong><small>{note}</small></div><Icon name="trend" size={20}/></div>;
}

function Dashboard({ go }: { go: (s: WebScreen) => void }) {
  return <><WebHeader title="Selamat pagi, Budi" subtitle="Ringkasan situasi Karhutla · Kamis, 12 Juni 2025"/><main className="web-main">
    <div className="operational-banner"><div><span className="pulse-dot"/><strong>Status Siaga II</strong><span>Provinsi Riau · Berlaku hingga 15 Juni 2025</span></div><button onClick={() => go("riskmap")}>Lihat situasi wilayah <Icon name="arrow" size={16}/></button></div>
    <div className="stats-grid"><StatCard label="Wilayah Risiko Tinggi" value="8" note="+2 dari kemarin" icon="fire" tone="red"/><StatCard label="Patroli Aktif" value="12" note="37 petugas lapangan" icon="team" tone="green"/><StatCard label="Peringatan Aktif" value="5" note="2 perlu verifikasi" icon="alert" tone="amber"/><StatCard label="Indikasi Asap" value="3" note="Hari ini" icon="cloud" tone="blue"/></div>
    <div className="dashboard-grid">
      <div className="panel map-panel"><SectionTitle eyebrow="MONITORING REAL-TIME" title="Peta Risiko Provinsi Riau" action={<button className="link-btn" onClick={() => go("riskmap")}>Buka peta lengkap <Icon name="arrow" size={15}/></button>}/><div className="map-filter-row"><button className="active">Risiko AI</button><button>Tim Patroli</button><button>Hotspot</button><span>Terakhir diperbarui 1 menit lalu</span></div><MapVisual detailed/><div className="map-legend-float"><strong>Tingkat Risiko</strong><span><i className="low"/>Rendah</span><span><i className="medium"/>Sedang</span><span><i className="high"/>Tinggi</span></div></div>
      <div className="panel alert-panel"><SectionTitle eyebrow="PRIORITAS" title="Peringatan Terbaru" action={<button className="link-btn" onClick={() => go("alerts")}>Lihat semua</button>}/><div className="desktop-alerts">{alertItems.slice(0,3).map((a, i) => <button key={a.title} onClick={() => go("alerts")}><span className={`alert-card-icon ${a.tone}`}><Icon name={a.icon}/></span><div><span><Badge tone={a.tone as "danger"|"warning"}>{a.level}</Badge><small>{a.time}</small></span><strong>{a.title}</strong><em>{a.place}</em></div>{i < 2 && <i className="unread"/>}</button>)}</div><div className="verification-progress"><div><span>Verifikasi hari ini</span><strong>14 dari 18 selesai</strong></div><div className="progress"><i/></div><small>78% alert telah diverifikasi petugas</small></div></div>
    </div>
    <div className="lower-grid"><div className="panel"><SectionTitle eyebrow="OPERASI LAPANGAN" title="Tim Patroli Aktif" action={<button className="link-btn" onClick={() => go("patrol")}>Lihat semua tim</button>}/><div className="team-table"><div className="table-head"><span>Tim</span><span>Wilayah</span><span>Durasi</span><span>Status</span></div>{[["MA Regu 03","Sungai Apit","01:24:18","Online"],["KPH Siak 02","Kec. Dayun","02:08:42","Online"],["MPA Teluk Meranti","Pelalawan","00:47:11","Offline"]].map(r=><div className="table-row" key={r[0]}><span><i className="team-avatar"><Icon name="team" size={16}/></i><strong>{r[0]}</strong></span><span>{r[1]}</span><span>{r[2]}</span><Badge tone={r[3]==="Online"?"success":"warning"}>{r[3]}</Badge></div>)}</div></div>
      <div className="panel risk-distribution"><SectionTitle eyebrow="DISTRIBUSI" title="Risiko Wilayah"/><div className="donut"><div><strong>28</strong><span>wilayah</span></div></div><div className="distribution-list"><div><i className="high"/><span>Tinggi</span><strong>8</strong><em>29%</em></div><div><i className="medium"/><span>Sedang</span><strong>11</strong><em>39%</em></div><div><i className="low"/><span>Rendah</span><strong>9</strong><em>32%</em></div></div></div>
    </div>
  </main></>;
}

function LargeRiskMap() {
  return <><WebHeader title="Peta Risiko" subtitle="Monitoring spasial risiko kebakaran hutan dan lahan"/><main className="web-main">
    <div className="filter-bar"><SelectField label="Wilayah"><option>Semua Kabupaten</option><option>Siak</option><option>Pelalawan</option></SelectField><SelectField label="Tingkat Risiko"><option>Semua Risiko</option><option>Tinggi</option><option>Sedang</option></SelectField><SelectField label="Rentang Waktu"><option>Hari ini</option><option>7 hari terakhir</option></SelectField><SelectField label="Status Patroli"><option>Semua Status</option><option>Aktif</option></SelectField><Button icon="search">Terapkan Filter</Button></div>
    <div className="large-map-layout"><div className="panel large-map"><div className="map-overlay-title"><strong>Peta Prediksi Risiko AI</strong><span><i/> Data diperbarui 10:52 WIB</span></div><MapVisual detailed/><div className="layer-control"><strong>Lapisan Peta</strong><label><input type="checkbox" defaultChecked/> Zona risiko AI</label><label><input type="checkbox" defaultChecked/> Tim patroli</label><label><input type="checkbox" defaultChecked/> Hotspot satelit</label></div></div>
      <div className="map-side panel"><SectionTitle eyebrow="WILAYAH PRIORITAS" title="Risiko Tertinggi"/>{[["Sungai Apit, Siak","82%","8 hari tanpa hujan"],["Kerumutan, Pelalawan","78%","Lahan gambut"],["Kandis, Siak","73%","4 hotspot aktif"],["Bukit Batu, Bengkalis","69%","Kelembapan rendah"]].map((r,i)=><button key={r[0]}><span>{i+1}</span><div><strong>{r[0]}</strong><small>{r[2]}</small></div><Badge tone={i<2?"danger":"warning"}>{r[1]}</Badge></button>)}<div className="map-side-summary"><span><Icon name="team"/> 12 tim patroli aktif</span><span><Icon name="fire"/> 9 hotspot terpantau</span></div></div>
    </div></main></>;
}

function AlertManagement() {
  const rows = [
    ["12 Jun, 10:47","Sungai Apit","Indikasi Asap","TINGGI","87%","Perlu verifikasi","Buka"],
    ["12 Jun, 10:35","Kerumutan","Risiko Kebakaran","TINGGI","91%","Baru","Buka"],
    ["12 Jun, 09:58","Kandis","Hotspot Satelit","TINGGI","—","Terkonfirmasi","Detail"],
    ["12 Jun, 09:22","Bukit Batu","Kenaikan Risiko","SEDANG","76%","Dipantau","Detail"],
    ["12 Jun, 08:41","Dayun","Indikasi Asap","SEDANG","68%","False alarm","Detail"],
    ["11 Jun, 22:17","Teluk Meranti","Risiko Kebakaran","TINGGI","84%","Terkonfirmasi","Detail"],
  ];
  return <><WebHeader title="Manajemen Peringatan" subtitle="Tinjau, tindak lanjuti, dan verifikasi alert Karhutla"/><main className="web-main">
    <div className="stats-grid compact"><StatCard label="Total Alert Hari Ini" value="18" note="+5 sejak pukul 08.00" icon="alert" tone="amber"/><StatCard label="Perlu Verifikasi" value="4" note="Prioritas operator" icon="clock" tone="red"/><StatCard label="Terkonfirmasi" value="9" note="50% dari total alert" icon="check" tone="green"/><StatCard label="False Alarm" value="5" note="Akurasi AI 72%" icon="x" tone="blue"/></div>
    <div className="panel table-panel"><div className="table-toolbar"><div className="search-box"><Icon name="search" size={18}/><input placeholder="Cari peringatan..."/></div><div className="filter-pills"><button className="active">Semua</button><button>Perlu Verifikasi</button><button>Terkonfirmasi</button><button>False Alarm</button></div><Button variant="secondary" icon="download">Ekspor</Button></div>
      <div className="alert-table"><div className="alert-tr head">{["Waktu","Wilayah","Jenis Alert","Risiko","Confidence","Status","Verifikasi"].map(x=><span key={x}>{x}</span>)}</div>{rows.map((r,i)=><div className="alert-tr" key={r[0]+r[1]}><span>{r[0]}</span><span><strong>{r[1]}</strong></span><span>{r[2]}</span><span><Badge tone={r[3]==="TINGGI"?"danger":"warning"}>{r[3]}</Badge></span><span><strong>{r[4]}</strong></span><span><Badge tone={r[5]==="Terkonfirmasi"?"success":r[5]==="False alarm"?"neutral":"warning"}>{r[5]}</Badge></span><span><button className={i<2?"table-action urgent":"table-action"}>{r[6]} <Icon name="arrow" size={14}/></button></span></div>)}</div>
      <div className="pagination"><span>Menampilkan 1–6 dari 47 peringatan</span><div><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div></div>
    </div></main></>;
}

function PatrolMonitoring() {
  return <><WebHeader title="Monitoring Patroli" subtitle="Pantau pergerakan dan aktivitas tim lapangan secara real-time"/><main className="web-main"><div className="patrol-layout"><div className="panel patrol-map-panel"><SectionTitle eyebrow="12 TIM AKTIF" title="Posisi Tim Lapangan"/><MapVisual detailed active/></div><div className="panel patrol-team-list"><SectionTitle eyebrow="STATUS REAL-TIME" title="Tim Patroli"/>{[["MA Regu 03","Sungai Apit","4.7 km","01:24:18","Online"],["KPH Siak 02","Dayun","7.2 km","02:08:42","Online"],["MPA Teluk Meranti","Pelalawan","2.1 km","00:47:11","Offline"],["BPBD Regu 01","Kerumutan","5.4 km","01:36:08","Online"]].map((r,i)=><button key={r[0]}><div className="team-number">{i+1}</div><div><strong>{r[0]}</strong><span><Icon name="location" size={13}/>{r[1]}</span><small>{r[2]} · {r[3]}</small></div><Badge tone={r[4]==="Online"?"success":"warning"}>{r[4]}</Badge></button>)}</div></div></main></>;
}

function Reports() {
  return <><WebHeader title="Laporan & Analitik" subtitle="Evaluasi patroli, tren risiko, dan kinerja verifikasi"/><main className="web-main">
    <div className="report-top"><div className="date-control"><Icon name="clock" size={17}/><span>01–12 Juni 2025</span><Icon name="chevron" size={15}/></div><Button icon="download">Ekspor Laporan</Button></div>
    <div className="stats-grid"><StatCard label="Total Patroli" value="148" note="+12.4% periode lalu" icon="patrol" tone="green"/><StatCard label="Cakupan Area" value="2.840 km²" note="78% area prioritas" icon="map" tone="blue"/><StatCard label="Total Peringatan" value="64" note="18 dalam 24 jam" icon="alert" tone="amber"/><StatCard label="Akurasi Alert AI" value="78.1%" note="+4.2% periode lalu" icon="trend" tone="red"/></div>
    <div className="report-grid"><div className="panel trend-panel"><SectionTitle eyebrow="ANALISIS RISIKO" title="Tren Risiko 12 Hari" action={<div className="chart-legend"><span><i className="high"/>Tinggi</span><span><i className="medium"/>Sedang</span></div>}/><div className="line-chart"><div className="y-labels"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><svg viewBox="0 0 800 260" preserveAspectRatio="none"><g stroke="#e8ece9"><path d="M0 20h800M0 80h800M0 140h800M0 200h800M0 255h800"/></g><path d="M0 215 70 192 140 202 210 160 280 175 350 130 420 145 490 90 560 108 630 62 700 78 800 42" fill="none" stroke="#d64933" strokeWidth="4"/><path d="M0 170 70 155 140 164 210 146 280 130 350 148 420 105 490 125 560 92 630 115 700 88 800 100" fill="none" stroke="#e6a53a" strokeWidth="3"/><path d="M0 215 70 192 140 202 210 160 280 175 350 130 420 145 490 90 560 108 630 62 700 78 800 42V260H0Z" fill="url(#fade)" opacity=".16"/><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d64933"/><stop offset="1" stopColor="#d64933" stopOpacity="0"/></linearGradient></defs></svg><div className="x-labels">{["1 Jun","3 Jun","5 Jun","7 Jun","9 Jun","12 Jun"].map(x=><span key={x}>{x}</span>)}</div></div></div>
      <div className="panel accuracy-panel"><SectionTitle eyebrow="KINERJA AI" title="Hasil Verifikasi Alert"/><div className="accuracy-donut"><div><strong>78%</strong><span>akurasi</span></div></div><div className="accuracy-stats"><div><i className="confirmed"/><span>Terkonfirmasi<strong>50</strong></span></div><div><i className="false"/><span>False alarm<strong>14</strong></span></div></div><div className="ai-note"><Icon name="trend"/><span>Akurasi model meningkat <strong>4.2%</strong> bulan ini</span></div></div>
    </div>
    <div className="report-grid lower"><div className="panel coverage-panel"><SectionTitle eyebrow="CAKUPAN LAPANGAN" title="Patroli per Wilayah"/>{[["Kab. Siak",82,42],["Kab. Pelalawan",74,36],["Kab. Bengkalis",67,29],["Kab. Kampar",58,23],["Kota Dumai",46,18]].map(r=><div className="coverage-row" key={r[0] as string}><span>{r[0]}</span><div><i className={`coverage-${r[1]}`}/></div><strong>{r[1]}%</strong><em>{r[2]} patroli</em></div>)}</div><div className="panel daily-summary"><SectionTitle eyebrow="RINGKASAN HARIAN" title="Aktivitas Hari Ini"/><div className="summary-big"><strong>18</strong><span>patroli selesai</span></div><div className="summary-grid"><div><Icon name="clock"/><strong>42j 18m</strong><span>Total durasi</span></div><div><Icon name="map"/><strong>327 km</strong><span>Jarak tempuh</span></div><div><Icon name="file"/><strong>24</strong><span>Temuan</span></div><div><Icon name="team"/><strong>51</strong><span>Petugas</span></div></div></div></div>
  </main></>;
}

function WebApp({ onLogout }: { onLogout: () => void }) {
  const [screen, setScreen] = useState<WebScreen>("dashboard");
  return <div className="web-app"><Sidebar screen={screen} go={setScreen} logout={onLogout}/><div className="web-content">{screen === "dashboard" && <Dashboard go={setScreen}/>} {screen === "riskmap" && <LargeRiskMap/>} {screen === "alerts" && <AlertManagement/>} {screen === "patrol" && <PatrolMonitoring/>} {screen === "reports" && <Reports/>}</div></div>;
}

export default function App() {
  const [mode, setMode] = useState<"login" | "mobile" | "web">("login");
  if (mode === "mobile") return <MobileApp onLogout={() => setMode("login")}/>;
  if (mode === "web") return <WebApp onLogout={() => setMode("login")}/>;
  return <Login onLogin={(role) => setMode(role === "field" ? "mobile" : "web")}/>;
}
