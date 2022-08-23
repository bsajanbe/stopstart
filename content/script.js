const intialData = [1,2,3,4,5,6,7,8,9];

const generateDiv = (value) => {
    const _div = document.createElement('div');
    _div.classList.add('box');
    _div.innerText = value;
    return _div;
    //<div class="box">3</div>
};

const generateContent = (arr) => {
    return arr.map((value)=> {
        return generateDiv(value);
    })
}

const getContent = () => document.getElementById('content');

const generateAndUpdateContent = (data) => {
    const generatedDivs = generateContent(data);
    const content = getContent();
    generatedDivs.map((div)=> {
        content.appendChild(div)
    });
}

const resetContent = () => {
    const content = getContent();
    content.innerHTML = '';
}

const resetContentDom = (_data) => {
    const data = [ ..._data];
    resetContent();    
    generateAndUpdateContent(data);
}

function shuffleMyData(_data) {
    const data = [ ..._data];
    const shuffledData = data.sort(() => .5 - Math.random());
    resetContent();    
    generateAndUpdateContent(shuffledData);
}



generateAndUpdateContent(intialData);