const table= document.getElementById("table");
const addBook=()=>{
    
    const title= document.getElementById("title").value;
    const author= document.getElementById("author").value;
    const genere= document.getElementById("genere").value;
    table.insertAdjacentHTML('beforeend', `<tr>
        <td>
            ${title}
        </td>
        <td>
            ${author}
        </td>
        <td>
            ${genere}
        </td>
    </tr>
    `);
}

// const rowMaker = (title, author, genere) => {
//     const tableRow = `
//     <tr>
//     <td>
//         ${title}
//     </td>
//     <td>
//         ${author}
//     </td>
//     <td>
//         ${genere}
//     </td>
//     </tr>`;
//     table.insertAdjacentHTML('beforeend', tableRow);
    
// }

// document.addEventListener('click', (e) => {
//     if(!e.target.closest('.btn-add')) return;
//     const table= document.getElementById("table");
//     const title= document.getElementById("title").value;
//     const author= document.getElementById("author").value;
//     const genere= document.getElementById("genere").value;

//     rowMaker(title, author, genere);
// })

