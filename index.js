const freelancers = [
    {Name: "Alice", Occupation: "Writer", price: 30 },
    {Name: "Bob", Occupation: "Teacher", price: 50},
    {Name: "Carol", Occupation: "Programmer", price: 70}
];

// can create a new arr of freelancers that's data to be added
const freelancers2 = [
    {Name: "Dan", Occupation: "Writer", price: 30 },
    {Name: "Rick", Occupation: "Teacher", price: 50},
    {Name: "Sue", Occupation: "Programmer", price: 70}
];

// Way to render the freelancers on the page dynamically
// function selects container to hold Fl data; after selecting container, dynamically build the html; append it to container
function init(){
    const root = document.querySelector('#root')
    console.dir(root)

    const h1 = document.createElement("h1")
    h1.innerHTML = "Freelancers"
    root.append(h1)

    const FLContainer = document.createElement("div")
    FLContainer.id = "FLContainer"
    root.append(FLContainer)
  
    console.dir(FLContainer)

    renderFLContainer()
};

function renderFLContainer(){
    const container = document.querySelector('#FLContainer')
    container.innerHTML = "";

    freelancers.forEach((FL) => {
        const div = document.createElement("div")

        div.innerHTML = `
            <h1>Name: ${FL.Name} Occupation: ${FL.Occupation} Price: ${FL.price}
        `
        container.append(div)
    })
};

// randomly add FL2 to page by calling render function above and using the new FL info
const addFL = () => {
    const randomIndex = Math.floor(Math.random() * freelancers2.length)
    console.log(randomIndex)
    const newFL = freelancers2[randomIndex]
    freelancers.push(newFL)
    renderFLContainer()
};

const add = setInterval(addFL, 5000);

setTimeout(()=>{
  clearInterval(add)
}, 10000);


// calculate avg price of all shown freelancers
// have a 3rd array of current FL on page









// const freelancers3 = [
    // {Name: `${freelancers.Name}`, Occupation: `${freelancers.Occupation}`, price: `${freelancers.price}` },
// ]
//console.table(freelancers3)



init();