const fetchData = async() => {
    let responce = await fetch("https://rickandmortyapi.com/api/character") ;
    let data = await responce.json();
    data=data.results;
    data =data.filter(d=>d.status=="Alive");
    return data;
  }
  const main = async () => {
    let list=document.getElementById("characterList");
    let err=document.getElementById("error");
    let result="<li> </li>";
    try {
      let data = await fetchData();
      if(data.length > 50){
        data=data.slice(0,50);
      }
    for(let i=0;i<data.length;i++){
       result+=`  <img/ src="${data[i].image}"> <br>
       Name:    ${data[i].name}  <br>
       Location:${data[i].location.name} <br>
       Species: ${data[i].species} <br>
       Gender:  ${data[i].gender} <hr>`;
    }
   list.innerHTML=result;
    } catch (error) {
      console.error(`Error happened :'( == ${error}`);
      err.innerHTML=error
    }
  }
  main();