document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".simple_form");
  const input = document.getElementById("hf_urli");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ✅ Chặn reload mặc định

    const tiktokUrl = input.value.trim();
    if (!tiktokUrl) {
      showErrorToast("Vui lòng dán link TikTok!");
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
        // ✅ Mở link tải đầu tiên
        window.open(data.data[0].url, '_blank');
      } else {
        showErrorToast(data.message || "Không lấy được video.");
      }
    } catch (err) {
      console.error(err);
      showErrorToast("Video or server error.");
    }
  });
});


