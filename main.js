const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

var btn = document.getElementById('btn')
var toggleBtn = document.getElementById('toggle-btn')

function leftClick() {
    btn.style.left = '0';
    // toggleBtn.style.color = '0';
    var x = document.getElementById("1st-page");
    var y = document.getElementById("2nd-page");
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none"
      } else {
        x.style.display = "flex";
        y.style.display = "none"
      }
    }
function rightClick() {
    btn.style.left = '50%'
    // toggleBtn.style.color = '0';
    var x = document.getElementById("1st-page");
    var y = document.getElementById("2nd-page");
    if (y.style.display === "none") {
        y.style.display = "flex";
        x.style.display = "none";
      } else {
        y.style.display = "flex";
        x.style.display = "none";
      }
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

function pageToggle() {
    var x = document.getElementById("1st-page");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function doDate()
{
    var str = "";

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();

    str += days[now.getDay()] + ", " + String(now.getDate()).padStart(2, "0") + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + String(now.getHours()).padStart(2, "0") +":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);