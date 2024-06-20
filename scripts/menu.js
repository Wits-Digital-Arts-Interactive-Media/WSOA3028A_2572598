const initialiseMenu = () => {
    const nav = document.querySelector('nav');
    
    const ul = document.createElement('ul');

    for(let item of ['Home', 'Blogs', 'Designs', 'Essays', 'Portfolio', 'Profile']) {
        const li = document.createElement('li');
        li.innerText = item.text;

        ul.appenChild(li);
    }

    nav.appendChild(ul);
};

document.addEventListener('DOMContentLo aded', () => initialiseMenu());

const root = "/WSOA3028A_2572598/"

const menuItems = [
    {name: "Blogs", href: `${root}blogs/blogs.html`},
    {name: "Designs", href: `${root}designs/index.html`},
    {name: "Essays", href: `${root}essays/index.html`},
    {name: "Portfolio", href: `${root}portfolio/portfolio.html`},
    {name: "Profile", href: `${root}profile/profile.html`},
    {name: "Home", href: `${root}index.html`},    
]

export function initialize(currentPage) {
    const nav = document.getElementById("navLinks")
    for (let menuItem of menuItems) {
        const a = document.createElement("a")
        if (currentPage != menuItem.name) {
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            a.setAttribute("id", "otherButton")
            nav.appendChild(a)
        }
        else if (currentPage == menuItem.name) {
            a.innerText = menuItem.name
            a.setAttribute("id", "currentButton")
            nav.appendChild(a)
        }
    }
}
