// const before = new Date('February 1 2023 6:28:55');
// const now = new Date();

// console.log(now.getTime());

// console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(mins, hours, days);

// console.log(`the blog was created ${days} ago`);

const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span>:
    <span>${m}</span>:
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);