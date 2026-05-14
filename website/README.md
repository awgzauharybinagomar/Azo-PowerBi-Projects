# Power BI Embed Website

Static website yang memaparkan Power BI report melalui iframe.

## Struktur

```
website/
  index.html      — page utama dengan iframe placeholder
  styles.css      — styling responsif
  script.js       — logik placeholder/iframe
  README.md       — panduan ini
```

## Cara Update iframe Power BI

1. Buka [app.powerbi.com](https://app.powerbi.com) dan navigate ke report
2. **File → Embed report → Publish to web (public)**
3. Klik **Create embed code** → **Publish**
4. Salin nilai `src` dari iframe yang diberikan
5. Buka `website/index.html`, cari baris:
   ```html
   <iframe ... src="about:blank" ...>
   ```
6. Ganti `about:blank` dengan URL embed dari Power BI:
   ```html
   <iframe ... src="https://app.powerbi.com/reportEmbed?reportId=884eca63-..." ...>
   ```
7. Simpan, commit, dan push

## Deploy ke GitHub Pages (Percuma)

1. Push branch ini ke GitHub (sudah dibuat)
2. Repo Settings → Pages
3. **Source:** `Deploy from a branch`
4. **Branch:** `claude/setup-powerbi-report-3eA7D` / Folder: `/website` (jika boleh) atau merge dulu ke `main` dan pilih `/website`
5. Klik **Save** — website akan tersedia di:
   ```
   https://awgzauharybinagomar.github.io/azo-powerbi-projects/
   ```

## Deploy Auto via GitHub Actions

Workflow di `.github/workflows/pages.yml` akan auto-deploy `website/` folder ke GitHub Pages setiap kali push.

## Custom Domain

Untuk gunakan domain sendiri (contoh: `dashboard.syarikat.com`):

1. Tambah file `website/CNAME` dengan kandungan:
   ```
   dashboard.syarikat.com
   ```
2. Set DNS CNAME record pointing ke `awgzauharybinagomar.github.io`
3. Settings → Pages → Custom domain → masukkan domain anda

## Catatan Penting

- **Publish to web** menjadikan report **public** — sesiapa dengan link boleh tengok. Jangan guna untuk data sensitif
- Update pada report di Power BI Service akan **auto-refresh** dalam iframe
- Untuk padam embed, pergi ke Power BI: `Settings → Manage embed codes → Delete`
