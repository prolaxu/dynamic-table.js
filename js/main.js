const table= document.getElementById("table").firstElementChild; 
const data=[
    {
        title: "Harry Potter",
        author: "JK Rowing",
        genere:"Fantacy"
    },
    {
        title: "The Guest List",
        author: "Lucey Foley",
        genere:"Horrer"
    },
    {
        title: "The Chain",
        author: "Adrian Mkkint",
        genere:"Horrer"
    }
];
if(!localStorage.books){
    localStorage.books=JSON.stringify(data);
}
let books=JSON.parse(localStorage.books);
const Builder=()=>{
    table.innerHTML=null;
    table.insertAdjacentHTML('beforeend',
    `<tr>
        <th>Title</th>
        <th>Author</th>
        <th>Genere</th>
        <th>Actions</th>
    </tr>`);
    books.forEach((book,index )=> {
        table.insertAdjacentHTML('beforeend',RowBuilder(book.title,book.author,book.genere,index));
    });
    table.insertAdjacentHTML('beforeend',
    `<tr>
        <td id="newTitle"></td>
        <td id="newAuthor"></td>
        <td id="newGenere"></td>
        <td></td>
    </tr>`);
}
const liveRow=()=>{
    const newTitle=document.getElementById("newTitle");
    const newAuthor=document.getElementById("newAuthor");
    const newGenere=document.getElementById("newGenere");
    newTitle.innerText=title.value;
    newAuthor.innerText=author.value;
    newGenere.innerText=genere.value;
}
const addBook=()=>{
    books.push({
        title: title.value,
        author: author.value,
        genere: genere.value
    });
    localStorage.books=JSON.stringify(books);
    Builder();
    title.value=null;
    author.value=null;
    genere.value=null;
}
const RowBuilder=(title,author,genere,index)=>{
    return `<tr>
            <td>
                ${title}
            </td>
            <td>
                ${author}
            </td>
            <td>
                ${genere}
            </td>
            <td>
            <button class="btn btn-edit" onClick="EditRow(${index})">Edit</button>
            <button class="btn btn-delete" onClick="RemoveRow(${index})">Remove</button>
            </td>
        </tr>
    `;
}
const RemoveRow=(index)=>{
    const newBooks=[];
    books.forEach((book,i) => {
        if(index!=i){
            newBooks.push(book);
        }
    });
    books=newBooks;
    localStorage.books=JSON.stringify(books);
    Builder();
}
const EditRow=(index)=>{
    const row= table.querySelectorAll("tr")[index+1];
    row.innerHTML=`
    <tr>
            <td>
            <input type="text" value="${row.children[0].innerText}">
            </td>
            <td>
            <input type="text" value=" ${row.children[1].innerText}">               
            </td>
            <td>
            <input type="text" value="${row.children[2].innerText}">
            </td>
            <td>
            <button class="btn btn-edit" onClick="EditRow(${index})">Save</button>
            <button class="btn btn-cancel" onClick="CancelEdit(this,${index})">Cancal</button>
            </td>
        </tr>`;
}
const CancalEdit=(obj,index)=>{
    RowBuilder(obj.children[0].innerText,obj.children[1].innerText,obj.children[2].innerText,index)
}
Builder();
const title=document.getElementById("title");
const author=document.getElementById("author");
const genere=document.getElementById("genere");