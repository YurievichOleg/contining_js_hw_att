let searchForId = (arrayObj, idValue) => {
    let res = false;
    arrayObj.forEach(element => {
        (Number(element.id.slice(0, -1)) === Number(idValue)) ? res = true : res = res;
    });
    return res;
}

