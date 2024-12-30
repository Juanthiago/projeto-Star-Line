const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'showMenu 400ms ease forwards';
    sideMenu.style.left = '0';
    sideMenu.style.display = 'block';
})

// Close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'hideMenu 400ms ease forwards';
    sideMenu.style.left = '100%';
})

// theme Toggler

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variabes');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class = "${order.shipping === 'Recusado' ? 'danger' : 
                                order.shipping === 'Pagamento Pendente' ? 'warning' :
                                order.shipping === 'primary'}">${order.shipping}</td>
                            <td class="primary">Detalhes</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
    
})