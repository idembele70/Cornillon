function Tab(label, anchor, titlePage) {
    this.label = label;
    this.anchor = anchor;
    this.page = new Page(titlePage);
}

function Page(title) {
    this.title = title;
}

function createTabHtml(tab) {
    const tabTag = document.createElement('a');
    tabTag.href = `#${tab.anchor}`
    tabTag.textContent = tab.label;
    document.querySelector('nav').appendChild(tabTag);
}

function createPageHtml(tab) {
    const section = document.createElement('section');
    section.id = tab.anchor;

    // Add h1
    let h1Tag = document.createElement('h1');
    h1Tag.textContent = tab.page.title;
    section.appendChild(h1Tag);
    section.innerHTML = `
    <h1>${tab.page.title}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Dicta tenetur dignissimos nobis in sint repellendus
                placeat inventore aspernatur accusantium. Impedit 
                reiciendis esse, error commodi numquam voluptas aut
                expedita? Excepturi, ex?
            </p>
    `;
    document.querySelector('#container').insertBefore(
        section,
        document.querySelector('footer')
    );
}

let tabs= [];
const KEY_TABS= 'tabs';

document.addEventListener('DOMContentLoaded', () => {
    if (window.localStorage) {
    const tabsString = localStorage.getItem(KEY_TABS)
        if (tabsString) {
            tabs = JSON.parse(tabsString);

            for (let tab of tabs) {
                createTabHtml(tab);
                createPageHtml(tab);
            }
        }
}
})
document.formAddTab.addEventListener('submit', function(e)  {
    e.preventDefault();
    const tab = new Tab (
        this.label.value,
        this.anchor.value,
        this.title.value,        
    );
    createTabHtml(tab);
    createPageHtml(tab);

    tabs.push(tab);
    if (window.localStorage) {
        localStorage.setItem(KEY_TABS, JSON.stringify(tabs));
    }
    location.hash = tab.anchor;
}) 


