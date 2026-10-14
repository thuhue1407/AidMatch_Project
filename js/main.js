document.addEventListener('DOMContentLoaded', function() {
    // Xử lý sự kiện cho nút "Lưu thay đổi"
    const nutLuu = document.querySelector('.nut-chinh');
    if (nutLuu) {
        nutLuu.addEventListener('click', function() {
            // Thay đổi text và style tạm thời để báo hiệu đã lưu
            const chuGoc = this.innerText;
            this.innerText = 'Đang lưu...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.innerText = 'Đã lưu thành công';
                this.style.backgroundColor = '#198754'; // Màu xanh lá
                this.style.opacity = '1';
                
                // Khôi phục lại sau 2 giây
                setTimeout(() => {
                    this.innerText = chuGoc;
                    this.style.backgroundColor = ''; // Trả về màu CSS gốc
                }, 2000);
            }, 800);
        });
    }

    // Xử lý nút "Liên hệ Điều phối viên"
    const nutLienHe = document.querySelector('.the-ho-tro .nut-trang');
    if (nutLienHe) {
        nutLienHe.addEventListener('click', function() {
            alert('Hệ thống đang kết nối với Điều phối viên trực tuyến. Vui lòng chờ trong giây lát...');
        });
    }

    // Thêm hiệu ứng active cho menu sidebar
    const cacMucMenu = document.querySelectorAll('.danh-sach-menu li');
    cacMucMenu.forEach(muc => {
        muc.addEventListener('click', function(e) {
            e.preventDefault();
            // Xóa class dang-chon ở tất cả các thẻ li
            cacMucMenu.forEach(i => i.classList.remove('dang-chon'));
            // Thêm class dang-chon vào thẻ li được click
            this.classList.add('dang-chon');
        });
    });
});