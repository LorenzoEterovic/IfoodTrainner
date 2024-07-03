function reload(){
    location.reload;
}

window.onload = function(){
    alert('Ganhe cupons! \nPegue seu cupom e aproveite o desconto')
}

function openNav(){
    document.getElementById("sidebar").style.width = "250px";

    document.querySelector(".main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("sidebar").style.width = "0";

    document.querySelector(".main").style.marginLeft = "0";
}