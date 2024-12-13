function showLoader(event, url) {
    event.preventDefault();
    document.getElementById('spinner').style.display = 'block';

    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
        window.location.href = url;
    }, 1000);
}

window.onload = function() {
    document.getElementById('spinnerAfter').style.display = 'block';
    setTimeout(() => {
      document.getElementById('spinnerAfter').style.display = 'none';
    }, 2000); 
    document.getElementById('spinnerQ').style.display = 'none';
    setTimeout(() => {
      document.getElementById('spinnerQ').style.display = 'none';
    }, 2000); 
};

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('spinnerAfter').style.display = 'block';
    setTimeout(() => {
      window.history.back();
    }, 2000); 
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('spinnerQ').style.display = 'block';
    
    setTimeout(() => {
      window.history.back();
    }, 2000); 
});