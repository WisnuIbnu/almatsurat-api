# 📿 Al-Matsurat API

API sederhana yang dibangun menggunakan **Next.js** untuk menyediakan konten **Al-Matsurat**, sebuah kumpulan dzikir pagi dan sore yang disusun oleh Imam Hasan Al-Banna. API ini menyajikan data dalam bentuk JSON dan dapat digunakan pada aplikasi mobile, website, atau sistem lainnya yang membutuhkan integrasi dzikir harian.

## 🚀 Fitur

- Dzikir Pagi & Sore Al-Matsurat versi **Sugro** (ringkas) dan **Kubro** (lengkap)
- Respons data dalam format JSON
- Dapat di-deploy di platform seperti Vercel, Netlify, dsb.

## 📌 Endpoint

| Name           | Endpoint URL                        | Deskripsi                              |
|----------------|--------------------------------------|----------------------------------------|
| Pagi Kubro     | `/api/almatsurat/pagiKubro`         | Dzikir pagi versi lengkap (Kubro)      |
| Sore Kubro     | `/api/almatsurat/soreKubro`         | Dzikir sore versi lengkap (Kubro)      |
| Pagi Sugro     | `/api/almatsurat/pagiSugro`         | Dzikir pagi versi ringkas (Sugro)      |
| Sore Sugro     | `/api/almatsurat/soreSugro`         | Dzikir sore versi ringkas (Sugro)      |

## 🔧 Teknologi

- **Framework**: [Next.js](https://nextjs.org)
- **Bahasa**: JavaScript (Node.js Runtime)
- **Format Output**: JSON

## 💡 Contoh Respons

```json
{
  "title": "Doa Masuk Waktu Pagi",
  "arab": "اللّهُـمَّ بِكَ أَصْبَـحْنا...",
  "latin": "Allahumma bika ashbahna...",
  "terjemah": "Ya Allah, dengan-Mu kami memasuki waktu pagi..."
}
