document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    let currentSlide = 0;
    const slides = [
        'images/slide1.jpg',
        'images/slide2.png',
        'images/slide3.png'
    ];
    const sliderImg = document.querySelector('.slider img');
    
    // 预加载图片
    slides.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        const nextImg = new Image();
        nextImg.src = slides[nextIndex];
        
        nextImg.onload = () => {
            sliderImg.style.opacity = '0';
            setTimeout(() => {
                currentSlide = nextIndex;
                sliderImg.src = slides[currentSlide];
                sliderImg.style.opacity = '1';
            }, 300);
        };
    }

    // 每5秒切换一次轮播图
    setInterval(nextSlide, 5000);

    // 响应式导航菜单（如果需要）
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // 这里可以添加登录逻辑
        alert('登录功能开发中...');
    });

    // 移除JavaScript hover效果，改用CSS实现


    // 图片加载失败处理
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'images/placeholder.jpg';
        });
    });
});