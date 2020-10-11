const Url = `http://localhost:3000/`;

$('#clean').click(function(){
    console.log('clean click');
    consumeService('DELETE');
});  

$('#runTest').click(function(){
    console.log('click');
    consumeService('GET');
  });

  const consumeService = (method) => {
    const api = new XMLHttpRequest();
    api.open(method, Url, true);
    api.send();

    api.onreadystatechange = function() {
      if(this.status == 200 && this.readyState == 4){
        console.log(this.responseText);
        generateInfo(this.responseText);
      }
    }
  }

  const generateInfo = (result) => {
    console.log('llego al construir');
    console.log(result);
    let structure = '';
    const layaout = document.querySelector('#tblbody');
    if (result != 'success'){
        var obj = JSON.parse(result);
        for (var key in obj){
          var data = obj[key];
          structure = structure.concat(`<tr><th scope="row">${data.porcent}</th>
          <td><img src="http://localhost:8081${data.imageOne}" alt='paleta 1' class="img-thumbnail"></td>
          <td><img src="http://localhost:8081${data.imageTwo}" alt='paleta 2' class="img-thumbnail"></td>
          <td><img src="http://localhost:8081${data.imageDiference}" alt='diferencias' class="img-thumbnail"></td></tr>`);
        }
    }
    layaout.innerHTML = structure;
  }