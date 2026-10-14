# Đề tài: AidMatch – Điều phối nhu cầu hỗ trợ và nguồn lực

**AidMatch** là dự án nền tảng web hỗ trợ quản lý, kết nối và điều phối các nguồn lực cứu trợ một cách thông minh, minh bạch và kịp thời.

## Tên trang đã thực hiện
**Trang 11.03 - Chi tiết Khai Báo Nguồn Lực** 

## Mục đích của trang
Trang web đóng vai trò là bảng điều khiển (dashboard) dành cho Điều phối viên hoặc Trạm trưởng (ví dụ: Trạm An Bình). Trang cho phép người dùng xem xét chi tiết một lô hàng cứu trợ (Mã định danh: RES-2026-0842), theo dõi tiến độ phân bổ qua biểu đồ thống kê, cập nhật thông tin vận chuyển và quản lý trạng thái xử lý theo thời gian thực (Timeline).

## Các chức năng chính
Trang web đáp ứng đầy đủ yêu cầu UI/UX và có tích hợp các tương tác nghiệp vụ bằng JavaScript:
1. **Thống kê trực quan:** Các thẻ Card hiển thị số liệu tổng cam kết, đã phân bổ, và tiến độ hoàn thành.
2. **Tiến trình xử lý (Timeline):** Giao diện timeline cho biết hàng hóa đang ở khâu nào (Tiếp nhận -> Kiểm định -> Phân bổ).
3. **Chức năng Chuyển Tab (Sidebar):** Tương tác JavaScript cho phép chuyển đổi trạng thái (Active/Hover) mượt mà giữa các mục trong menu điều hướng.
4. **Form Validation (Xác thực dữ liệu):** Thuật toán JavaScript kiểm tra tính hợp lệ của form "Thông tin Khai báo Chi tiết". Nếu người dùng bỏ trống các trường quan trọng, hệ thống sẽ cảnh báo viền đỏ.
5. **Thay đổi trạng thái & Mô phỏng API:** Khi nhấn "Lưu thay đổi", JavaScript xử lý vô hiệu hóa nút tạm thời, hiện trạng thái "Đang lưu..." và cập nhật thành công (thay đổi màu sắc, nội dung text) giúp mang lại trải nghiệm UX chân thực.


## Tài nguyên dự án

- **Link Figma (Trang 11.03):** [BTL-Figma AidMatch](https://www.figma.com/design/qRbPIZDcjAKBUfrQvjKHY1/BTL-Figma?node-id=0-1&p=f&t=k2dyq9hYwc0JDE4s-0)
- **Link Video :** [https://youtu.be/2AyPemgsvvE]
- **Link GitHub Repository:** [https://github.com/thuhue1407/AidMatch_Project/tree/main]
