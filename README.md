# Portfolio cá nhân – Mẫu tiếng Việt (tĩnh)

Mẫu website **giới thiệu bản thân** (1 trang) sẵn sàng deploy lên **GitHub Pages / Netlify / Vercel**.  
Bạn chỉ cần **tìm & thay** các placeholder dạng dấu ngoặc nhọn, ví dụ: `&lt;Tên bản thân&gt;`, `&lt;email@example.com&gt;`.

## 1) Chỉnh sửa nhanh (5–10 phút)
Mở `index.html` và `script.js`, thay các nội dung sau:
- `&lt;Tên bản thân&gt;`
- `&lt;Chức danh / Vai trò&gt;`
- `&lt;Mô tả 1-2 câu về bạn&gt;`
- `&lt;email@example.com&gt;` (trong `index.html` để hiển thị, **và** trong `script.js` biến `YOUR_EMAIL` để form gửi mailto)
- `&lt;SĐT hoặc Zalo&gt;`
- Các mục trong **Dự án** và **Kỹ năng**

> Lưu ý: Trong file HTML, dấu `<` `>` được viết dưới dạng `&lt;` `&gt;` để trình duyệt hiển thị đúng. Khi bạn sửa, có thể **giữ nguyên dấu** &lt;...&gt; hoặc thay hoàn toàn bằng chữ của bạn.

## 2) Chạy thử (tuỳ chọn)
Chỉ cần mở `index.html` trong trình duyệt. Không cần cài đặt gì.

## 3) Deploy GitHub Pages (miễn phí)
1. Tạo repository có tên **`username.github.io`** (thay `username` bằng tài khoản GitHub của bạn).
2. Tải lên các file trong thư mục này (`index.html`, `style.css`, `script.js`, `README.md`).  
3. Vào **Settings → Pages**: Source = `Deploy from a branch`, chọn branch `main`, folder `/ (root)`.
4. Truy cập `https://username.github.io` sau vài phút.

### Tên miền riêng (tuỳ chọn)
- Mua tên miền, tạo bản ghi **CNAME** trỏ `www.tenmien.com` → `username.github.io`.
- Tạo file `CNAME` (không phần mở rộng) trong repo, ghi `www.tenmien.com`.

## 4) Deploy Netlify / Vercel (nhanh)
- Kết nối Git repo → chọn project → **Deploy**.  
- Thêm custom domain theo hướng dẫn trong dashboard.

## 5) Nâng cấp gợi ý
- Thêm ảnh đại diện, ảnh dự án (đặt vào thư mục `img/` và chèn thẻ `<img loading="lazy">`).
- Dùng dịch vụ form (Formspree/Netlify Forms) nếu không muốn mở client email.
- Thêm Analytics (Plausible/Google Analytics).

---

**Bản quyền**: MIT. Dùng tự do cho mục đích cá nhân/học tập/thương mại.
