async function fetchHitokoto() {
    const hitokotoElement = document.getElementById('hitokoto');
    
    try {
        const response = await fetch('https://hitokoto.hnczy.icu/api.php');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (typeof data.hitokoto === 'string') {
            hitokotoElement.textContent = data.hitokoto;
        } else {
            hitokotoElement.textContent = '一言数据格式错误...';
        }
    } catch (error) {
        console.error('Error fetching hitokoto:', error);
        hitokotoElement.textContent = '一言获取失败...';
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', fetchHitokoto);