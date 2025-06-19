fetch('https://snaptok-production.up.railway.app/api/snaptik', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: tiktokUrl })
});
fetch('https://snaptok-test--masterdiosigcom.repl.co/api/snaptik', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://www.tiktok.com/@user/video/xyz' })
})
.then(res => res.json())
.then(data => {
  if (data.code === 0) {
    console.log("Các link tải:", data.data);
    window.open(data.data[0].url, '_blank');
  } else {
    alert(data.msg);
  }
})
.catch(err => alert("Lỗi gọi API"));
 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".simple_form");
  const input = document.getElementById("hf_urli");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ✅ Ngăn form gửi POST mặc định

    const tiktokUrl = input.value.trim();
    if (!tiktokUrl) {
      alert("Vui lòng dán link TikTok!");
      return;
    }

    try {
      const res = await fetch('/api/tiktok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: tiktokUrl })
      });

      const data = await res.json();
      if (data.code === 0 && data.data.length > 0) {
        window.open(data.data[0].url, '_blank');
      } else {
        alert(data.message || "Không lấy được video.");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi gọi API hoặc server.");
    }
  });
});
