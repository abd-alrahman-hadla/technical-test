export const handleMouseEvent = (containerClassName: string) => {
    const containerElement = document.querySelector(containerClassName) as any;
    let isDown = false;
    let startX: any;
    let scrollLeft: any;
    containerElement.addEventListener('mousedown', (e: any) => {
        isDown = true;
        startX = e.pageX - containerElement.offsetLeft;
        scrollLeft = containerElement.scrollLeft;
    });
    containerElement.addEventListener('mouseleave', () => {
        isDown = false;
    });
    containerElement.addEventListener('mouseup', () => {
        isDown = false;
    });
    containerElement.addEventListener('mousemove', (e: any) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - containerElement.offsetLeft;
        const walk = (x - startX);
        containerElement.scrollLeft = scrollLeft - walk;
    });
}