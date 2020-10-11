// document.querySelector('#runTest').addEventListener('click', async() => {
//   console.log('click');
//   const url = "http://localhost:3000/";
//   $.get(url, function(data, status){
//     console.log(`${data}`);
//   });
// });
  // $('#runTest').click(function(){
  //   console.log('click');
  //   const Url = "http://localhost:3000";
  //   $.get(Url, function(data, status){
  //     console.log(`${data}`);
  //   });
  // });

const Url = `http://localhost:3000/`;

$('#clean').click(function(){
    console.log('clean click');
    consumeService('DELETE');
});  

$('#runTest').click(function(){
    console.log('click');
    consumeService('GET');
    // const api = new XMLHttpRequest();
    // api.open('GET', Url, true);
    // api.send();

    // api.onreadystatechange = function() {
    //   if(this.status == 200 && this.readyState == 4){
    //     console.log(this.responseText);
    //     generateInfo(this.responseText);
    //     // let result = document.querySelector('#result');
    //     // result.innerHTML = `${this.responseText}`;
    //   }
    // }
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
    
    // const layaout = document.querySelector('#testResult');
    
    // if(!titleFlag){
    //   const titleLayout = document.querySelector("#titles");
    //   titleLayout.innerHTML = '';
    //   let addTitles = '';
    //   addTitles = addTitles.concat(`<div class="col"><h4 class="h4">Primer paleta</h4></div>
    //   <div class="col"><h4 class="h4">Primer paleta</h4></div>
    //   <div class="col"><h4 class="h4">Segunda paleta</h4></div>
    //   <div class="col"><h4 class="h4">Diferencias</h4></div>`);
    //   titleLayout.innerHTML = addTitles;

    // }
    
    // structure = structure.concat(`<div class="col-sm-6 col-lg-3">
    //     <p>Tiempo: ${result}</p>
    //     <p>Procentaje de diferencias: ${result} %</p>
    //     </div>
    //     <div class="col-sm-6 col-lg-3">
    //         <img src="http://localhost:8081/cypress/screenshots/vrt_color_pallete_spec.js/primera_paleta.png" alt='img' class="img-thumbnail">
    //     </div>
    //     <div class="col-sm-6 col-lg-3">
    //         <img src="http://localhost:8081/cypress/screenshots/vrt_color_pallete_spec.js/segunda_paleta.png" alt='img' class="img-thumbnail">
    //     </div>
    //     <div class="col-sm-6 col-lg-3">
    //         <img src="http://localhost:8081/cypress/screenshots/vrt_color_pallete_spec.js/diferencias.png" alt='img' class="img-thumbnail">
    //     </div>`);
  }

  // jQuery.get(/* .. */);

  // $('#runTest').click(function(){
  //   console.log('click');
  //   const Url = "http://localhost:3000/";
  //   jQuery.ajax({
  //       url: Url,
  //       type: "GET",
  //       success: function(result){
  //         console.log(result);
  //       },
  //       error:function(error){
  //         console.log(`Error ${error}`);
  //       }
  //   })
  // })