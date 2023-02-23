const sanPham = [

    
        {
            id: 0,
            name: "TICKET NEW YORK ",
            gia: 100,
            img: "./anh1.jpg",
            soluong: 1,
         
          },
          {
            id: 1,
            name: "PARIS",
            gia: 80,
            img: "./anh2.jpg",
            soluong: 1,
          },
          {
            id: 2,
            name: "SAN FRANSICO",
            gia: 120  ,
            img: "./anh3.jpg",
            
            soluong: 1,
          },
          {
            id: 3,
            name: "JAPAN",
            gia: 250,
            img: "./assets/img/anh9.jpg",
            soluong: 1,
          },
          {
            id: 4,
            name: "SWITERLAND",
            gia: 290,
            img: "./assets/img/anh7.jpg",
            soluong: 1,
          },
          {
            id: 5,
            name: "SINGAPORE",
            gia: 320,
            img: "./assets/img/anh8.jpg",
            soluong: 1,
          }
       
    
]






function shop() {
  document.getElementById("giohang").classList.toggle("active-cart");
  
}
let arr=[];
var mycart = document.getElementById("mycart");

var btns = document.querySelectorAll(".btn");
btns.forEach((ele, index) => {
var check = false
  ele.addEventListener("click", () => {
    sanPham.forEach((el) => {
      if (el.id == index) {
        // arr.push(el)
        arr.forEach(element => {
          if(index == element.id){
            element.soluong = element.soluong + 1 ; check=true ; 
          }
        })
        if(!check){
          arr.push(el)
        }
      }
    });
    renderCart();
    console.log(arr);
    saveCart()
  });
});

function totalPrice() {
  var sum = 0;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  var price = document.querySelectorAll(".price-cart");
  price.forEach((ele) => {
    sum += ele.innerHTML * 1;
  });
  document.querySelector(".total-price").innerHTML = formatter.format(sum);
}

function remCart(ele, id) {
  var par = ele.parentElement;
  mycart.removeChild(par);  
  arr.forEach((element, index) => {
    if (element.id == id) {
      arr.splice(index, 1)
    }
  })
  totalPrice();
  saveCart()
}

function renderCart() {
  var item = "";
  arr.forEach((el) => {
      item += `
      <tr>
     
      <td><img width='100px' class="img-cart" src="${el.img}" alt="" /></td>
      <td>${el.name}</td>
      <td>${el.gia}</td>
     
      <td><button onclick="handleDecrease(${el.id})" class="cong handleMinus">-</button>${el.soluong}
       <button onclick="handleIncrease(${el.id})" class="cong handlePlus">+</button></td>
      <td class="price-cart">${el.gia * el.soluong}</td>
    <td onclick="remCart(this, ${el.id})"><i class="close ti-close"></i></td>
     
    </tr>
          `;

    }
   

  );
  mycart.innerHTML = item;
  document.getElementById("giohang").classList.add("active-cart");
  
  totalPrice();
}




function handleDecrease(id) {
  arr.forEach(ele => {
    if(ele.id == id)
    // ele.soluong = ele.soluong - 1 ; 
    if(ele.soluong != 1){
      ele.soluong = ele.soluong - 1
    }
  })
  renderCart();
  saveCart()
}
function handleIncrease(id) {
  arr.forEach(ele => {
    if(ele.id == id)
    ele.soluong = ele.soluong + 1 ; 
  })
  renderCart();
  saveCart()
}


function saveCart() {
  localStorage.setItem('sanpham',JSON.stringify(arr))
}
if (localStorage.getItem('sanpham')!=null) {
  arr=JSON.parse(localStorage.getItem('sanpham'))
  renderCart();
}
