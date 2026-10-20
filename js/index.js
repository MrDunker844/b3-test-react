const button = document.getElementById('add-book');
const list = document.getElementById('book-list');
const divError = document.getElementById('error');
const errorFeedback = document.createElement('p');
const loading = document.getElementById('loading');
divError.append(errorFeedback)
let index = 0;
const API_KEY = 'AIzaSyB6NRwilj75IcRkjuq7k56v40PTNbuumHw';


async function fetchData() {
    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    url.searchParams.set('q', 'javascript');
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('startIndex',index)
    url.searchParams.set('maxResults',"10")
    try{
        loading.textContent = 'Loading...';
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);
        index+=10;
        loading.textContent = '';
        return data;
    }catch(err){
        console.log(err);
        loading.textContent = 'Failed';
    }
}

async function handleClick() {
    try{
        const data = await fetchData();
        for (const item of data.items) {
            const li = document.createElement('li');
            li.textContent = item.volumeInfo.title;
            list.append(li);
        }
        errorFeedback.textContent = "";

    }catch(err){
        console.log(err);
        errorFeedback.textContent = err.message;
    }


}

handleClick();
button.addEventListener('click', handleClick);
