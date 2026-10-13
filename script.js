document.addEventListener('DOMContentLoaded', function() {
    // Xử lý sự kiện cho nút "Lưu thay đổi"
    const saveBtn = document.querySelector('.btn-primary');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            // Thay đổi text và style tạm thời để báo hiệu đã lưu
            const originalText = this.innerText;
            this.innerText = 'Đang lưu...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.innerText = 'Đã lưu thành công';
                this.style.backgroundColor = '#198754'; // Màu xanh lá
                this.style.opacity = '1';
                
                // Khôi phục lại sau 2 giây
                setTimeout(() => {
                    this.innerText = originalText;
                    this.style.backgroundColor = ''; // Trả về màu CSS gốc
                }, 2000);
            }, 800);
        });
    }

    // Xử lý nút "Liên hệ Điều phối viên"
    const contactBtn = document.querySelector('.support-card .btn-white');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Hệ thống đang kết nối với Điều phối viên trực tuyến. Vui lòng chờ trong giây lát...');
        });
    }

    // Thêm hiệu ứng active cho menu sidebar
    const menuItems = document.querySelectorAll('.menu-list li');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Xóa class active ở tất cả các thẻ li
            menuItems.forEach(i => i.classList.remove('active'));
            // Thêm class active vào thẻ li được click
            this.classList.add('active');
        });
    });
});