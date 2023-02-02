function submit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var select = document.getElementsByTagName("select");
    var skills = document.querySelectorAll("#skills");
    var showInfo = document.getElementById("showInfo");
    showInfo.innerHTML = "";
    if(name == "" && email == "") {
        alert("Please enter your name !\nPlease enter your email !");
        showInfo.style.display = "none";
    } else if(email == "") {
        alert("Please enter your email !"); 
        showInfo.style.display = "none";
    }else if(name == "") {
        alert("Please enter your name !"); 
        showInfo.style.display = "none";
    }else {
        var check = 1;
        for(let i of select){
            if(i.value == ""){
                i.style.border = "1px solid red";
                check = 0;
            } else {
                i.style.border = "1px solid black";
            }
        }
        if(check == 1){
            showInfo.innerHTML = `Xem lại thông tin của bạn:<br>
            Tên: ${name}<br>
            Email: ${email}<br>
            Năm tốt nghiệp: ${select[0].value}<br>
            Điểm toán: ${select[1].value}<br>
            Điểm lý: ${select[2].value}<br>
            Điểm ngoại ngữ: ${select[3].value}<br>
            Kỹ năng:<br>
            `;
            skills.forEach(function(item){
                if(item.checked){
                    showInfo.innerHTML += `${item.value}<br>`;
                }
            });
            showInfo.style.display = "block";
        } else {
            showInfo.style.display = "none";
        }    
    }
}
