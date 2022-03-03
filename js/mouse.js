document.addEventListener("mousemove", (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
});
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});