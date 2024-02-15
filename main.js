/*function mesajgonder()
{
    var mesaj=document.getElementById("mesaj").value;
    var d=new Date();
    var saat=d.getHours();
    var dakika=d.getMinutes();
    document.getElementById("mesajkutulari").innerHTML+="div class='gidenmesaj'> <img src='hellokitty.jpeg'>"+mesaj+"<span id='tarih'>"+ saat + ":" +dakika+ "</span></div>";
    document.getElementById("mesaj").value="";
}*/

function mesajGonder(){
    var mesaj=document.getElementById("mesaj").value;
    var d = new Date();
    var saat=d.getHours();
    var dakika=d.getMinutes();
    document.getElementById("mesajKutulari").innerHTML+=
    "<div class='gidenMesaj'> <img src='images/mckafaaa.png'>"
    + mesaj +
    "<span id='tarih'>"+saat+":"+dakika+"</span></div>";
    document.getElementById("mesaj").value="";
   }