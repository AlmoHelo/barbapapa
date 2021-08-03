let balls = document.getElementsByClassName("ball");
let tong = document.querySelector(".tong");

/**
 * For move eyes and tong with the mouse
 */
document.onmousemove = function () {

    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";


    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }

    let xTong = event.clientX * 100 / window.innerWidth;
    if(xTong > 75){
        tong.style.left = 83 + "%";
        tong.style.transform = "translateX(-75)";
    } else {
        tong.style.left = xTong + "%";
        tong.style.transform = "translate(-" + xTong + "%,-70)";
    }

}
