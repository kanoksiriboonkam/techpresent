document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector(".slideshow-container");
  const images = Array.from(slideshow.querySelectorAll("img"));

  let startIndex = 0; // index รูปแรกที่แสดง
  const total = images.length;
  const intervalTime = 3000; // เวลาเลื่อนอัตโนมัติ (ms)

  function updateGrid() {
    // ซ่อนรูปทั้งหมด
    images.forEach(img => img.style.opacity = 0);

    // เลือก 3 รูปต่อเนื่อง
    const i2 = images[startIndex % total];
    const i3 = images[(startIndex + 1) % total];
    const i4 = images[(startIndex + 2) % total];

    i2.style.opacity = 1;
    i3.style.opacity = 1;
    i4.style.opacity = 1;

    // กำหนด grid-area
    i2.style.gridArea = "img2";
    i3.style.gridArea = "img3";
    i4.style.gridArea = "img4";
  }

  updateGrid(); // แสดงครั้งแรก

  // คลิกเปลี่ยนรูป
  slideshow.addEventListener("click", () => {
    startIndex = (startIndex + 1) % total;
    updateGrid();
  });

  // เลื่อนอัตโนมัติ
  setInterval(() => {
    startIndex = (startIndex + 1) % total;
    updateGrid();
  }, intervalTime);
});
