const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

function checkNumImputs(slector) {
    slector.forEach(item => {
        item.addEventListener('input', () => {
        if (item.value.match(/\D/g)) {
            item.style.border = '1px solid red';
        } else {
            item.style.border = '1px solid #ccc';
        }
        });
       
    });
}

export {postData, checkNumImputs};