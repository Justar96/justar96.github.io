const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

var btn = document.getElementById('btn')

function leftClick() {
    btn.style.left = '0'
}
function rightClick() {
    btn.style.left = '50%'
}

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About me',
        width: '400px',
        height: '400px',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        x: "50",
        y: "50",
        mount: aboutContent,
        onfocus: function (){
            this.setBackground('#00aa00')
        },
        onblur: function (){
            this.setBackground('#333')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact me',
        width: '300px',
        height: '400px',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        x: "300",
        y: "300",
        mount: contactContent,
        onfocus: function (){
            this.setBackground('#00aa00')
        },
        onblur: function (){
            this.setBackground('#333')
        }
    })
})