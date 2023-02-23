const sanPham = [
    {
      id: 0,
      name: "NEW YORK ",
      gia: 81000*1,
      img: "./anh1.jpg",
      soluong: 1,
   
    },
    {
      id: 1,
      name: "PARIS",
      gia: 80000,
      img: "./anh2.jpg",
      soluong: 1,
    },
    {
      id: 2,
      name: "SAN FRANSICO",
      gia: 82000  ,
      img: "./anh3.jpg",
      
      soluong: 1,
    },
    {
      id: 3,
      name: "JAPAN",
      gia: 2500000,
      img: "./assets/img/anh9.jpg",
      soluong: 1,
    },
    {
      id: 4,
      name: "SWITERLAND",
      gia: 2900000,
      img: "./assets/img/anh7.jpg",
      soluong: 1,
    },
    {
      id: 5,
      name: "SINGAPORE",
      gia: 3200000,
      img: "./assets/img/anh8.jpg",
      soluong: 1,
    }
 
  ];
  
  document.getElementById("giohang").style.display='none'
  function giohang() {
   
    // console.log(document.getElementById("giohang").style.display)
    // if(document.getElementById("giohang").style.display=='none'){
    //   document.getElementById('giohang').style.display='table'}
    //  else  if (document.getElementById("giohang").style.display=='table'){
    //   document.getElementById("giohang").style.display='none'
    // }
    document.getElementById("giohang").classList.toggle("active-cart");
    document.querySelector(".tamgiac").classList.toggle("active-cart");
  
  var mycart = document.getElementById("mycart");
  var item = "";
  var i = 1;
  var btns = document.querySelectorAll(".btn");
  btns.forEach((ele, index) => {
    ele.addEventListener("click", () => {
      sanPham.forEach((el) => {
        if (el.id == index) {
          item += `
          <tr >
          <td>${i}</td>
          <td><img width="100px" class="img-cart" src="${el.img}" alt="" /></td>
          <td >${el.name}</td>
          <td class='dongia'>${el.gia}</td>
          <td><button class="minus-btn" onclick="handleMinus(this)" ><i class="ti ti-minus"></i></button>
          <input class="cong" type="text" name="amount" id="amount" value="${el.soluong}">
          <button class="plus-btn" onclick="handlePlus(this)"> <i class="ti ti-plus"></i> </button></td>
          <td class='price-cart'>${el.gia * (el.soluong ) }</td>
          
          <td>  <i class="ti-close" onclick='xoa(this)'></i> </td>
          
        </tr>
              `;
          i++;
        }
        mycart.innerHTML = item;
        // document.getElementById("giohang").classList.add("active-cart");
        // document.querySelector(".tamgiac").classList.add("active-cart");
        totalPrice();
        
      });
    });
  });}
  function totalPrice() {
    var sum = 0;
    var formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    var price = document.querySelectorAll(".price-cart");
    price.forEach((ele) => {
      sum += ele.innerHTML * amount;
      
    });

    if (!isNaN(sum)) {
      
      document.querySelector(".total-price").innerHTML = formatter.format(sum);
    }
  }
  function xoa(x){
    x.parentElement.parentElement.parentElement.removeChild(x.parentElement.parentElement)
    console.log(x.parentElement.parentElement)
    // item -x.parentElement.parentElement
    // mycart.innerHTML = item;
    totalPrice();
    
  }
  
