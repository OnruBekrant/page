# React Authentication & Dashboard Uygulaması

Bu proje, React, Vite ve TypeScript kullanılarak geliştirilmiş modern bir oturum açma (Login) ve yönetim paneli (Dashboard) uygulamasıdır. `react-router-dom` ile sayfa yönlendirmeleri yapılmış ve `localStorage` kullanılarak basit bir kimlik doğrulama (Authentication) simülasyonu oluşturulmuştur.

## 🚀 Özellikler

- **Hızlı ve Modern:** Vite ve TypeScript altyapısı.
- **Güvenli Yönlendirme:** Giriş yapılmadan Dashboard sayfasına erişim engellenir (Protected Route).
- **Oturum Yönetimi:** Sayfa yenilendiğinde oturumun korunması için `localStorage` entegrasyonu.
- **Kullanıcı Deneyimi:** Şifre göster/gizle özelliği ve hatalı giriş uyarıları.
- **Responsive Tasarım:** Temiz ve modern CSS yapısı.

## 🛠 Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- React Router DOM
- CSS3

## 📂 Proje Dosya Yapısı

    src/
    ├── assets/
    ├── pages/
    │   ├── Dashboard.tsx  (Yönetim Paneli)
    │   └── Login.tsx      (Giriş Sayfası)
    ├── styles/
    │   ├── App.css        (Genel Ayarlar)
    │   ├── Dashboard.css  (Panel Stilleri)
    │   ├── index.css      (Global Reset & Dark Mode)
    │   └── Login.css      (Giriş Formu Stilleri)
    ├── App.tsx            (Routing Yapısı)
    └── main.tsx           (Giriş Noktası)

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin.

1. Projeyi klonlayın veya indirin:

    git clone [https://github.com/kullanici-adi/proje-adi.git](https://github.com/kullanici-adi/proje-adi.git)

2. Proje klasörüne gidin:

    cd proje-adi

3. Gerekli bağımlılıkları (node_modules) yükleyin:

    npm install

4. Uygulamayı başlatın:

    npm run dev

## 🔐 Giriş Bilgileri (Demo)

Uygulama demo modunda olduğu için aşağıdaki sabit bilgileri kullanarak giriş yapabilirsiniz:

- **Kullanıcı Adı:** admin
- **Şifre:** 12345

## 📝 Lisans

Bu proje açık kaynaklıdır ve eğitim amaçlı hazırlanmıştır.
