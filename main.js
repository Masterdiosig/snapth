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
