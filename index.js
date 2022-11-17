function mom(){
document.getElementById('myImage').src='https://cdn3.vectorstock.com/i/1000x1000/68/82/i-love-mom-heart-sign-vector-13936882.jpg';
document.getElementById('fast').innerHTML='MOM LOVE';
document.getElementById('body').style.background="url('https://www.thesaurus.com/e/wp-content/uploads/2021/05/20210503_mom_1000x700.jpg')";
}
function reset(){
     document.getElementById('myImage').src="https://c8.alamy.com/comp/G2G292/i-love-mom-and-dad-G2G292.jpg";
    document.getElementById('body').style.background="url('')";
    alert('hi');
    }
function dad(){
    document.getElementById('myImage').src='https://cdn1.vectorstock.com/i/1000x1000/67/50/i-love-dad-heart-sign-vector-13936750.jpg';
 document.getElementById('body').style.background="url('https://media.istockphoto.com/vectors/love-vector-id469002532?k=20&m=469002532&s=612x612&w=0&h=-Ko3WRsyX5yddCX4beiY5vw_R9toLjuEmk7cC47EvSg=')";
    }


    try {
        sum.value = eval(sum.value);
    }
    catch (err) {
        alert("any")
    }