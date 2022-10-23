const peticion=new XMLHttpRequest();
peticion.open('GET','http://localhost:3000/posts');
peticion.send();
peticion.addEventListener('load',function(){
    if (peticion.status==200){
        let post=JSON.parse(peticion.responseText);
        console.log(post);
        for(let i=0;i<post.length;i++){
            let l=document.querySelector('ul');
            let lis=document.createElement('li');
            let a=document.createElement('a');
            a.setAttribute('href',`articulo.html?id=${post[i+1].id}`);
            let cont=document.createTextNode("Tittle "+post[i].title+ " Author "+post[i].authorId);
            a.appendChild(cont);
            lis.appendChild(a);
            l.appendChild(lis);
        }
    }
})