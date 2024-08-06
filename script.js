const btn=document.querySelector("#search")
btn.addEventListener('click',async ()=>{
    let search=document.querySelector("#userSearch")
    if(!search){
        alert("pls enter something !")
    }else{
        const url = `https://google-search74.p.rapidapi.com/?query=${search.value}&limit=10&related_keywords=true`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8127b0d51bmshdc646582c258d37p139c82jsn9a8cca2915e2',
		'x-rapidapi-host': 'google-search74.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const data=result.results
    const img=result.knowledge_panel

	console.log(result);
    if(img!=null){
    document.querySelector("#img").innerHTML=`<img src="${img.image.url}" width="150" height="150">`
    }else{
        console.log("image property does not exists")
    }

    data.map((val)=>{
        document.querySelector("#result").innerHTML += `
        <div class="bg-white shadow-md  p-5">
            <div class="w-full md:w-[90vw]">
                <h1 class="text-2xl font-bold text-green-600 hover:text-green-800 transition duration-300">
                    <a href="${val.url}" target="_blank">${val.title}</a>
                </h1>
                <p class="text-gray-600 mt-2">${val.description}</p>
            </div>
        </div> `;    
    })
} catch (error) {
	console.error(error);
}
    }
})