const app= document.querySelector("#app");
const show=()=>{
    fetch("http://localhost:3000/products")
    .then((respone)=> respone.json())
    .then((data)=>{
       app.innerHTML= data.map((item,index)=>{
            return`
            <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}"></td>
            <td>${item.price}</td>
            <td>
               <button class="btn-delete">Delete</button>
            </td>
           </tr>
           `;
        })
        .join("");
    })
    .then(()=>{
      const btnDeletes = document.querySelectorAll(".btn-delete");
      console.log(btnDeletes);
    });
};
show();