function getDate(timestamp) {
    if (timestamp)
        return timestamp.toDate().toLocaleDateString('en-UK', { day: "numeric", month: "short", year: "numeric" });

    return "";
}

function groupBy(data, key) {
    return data.reduce(function (storage, item) {

        var group = item[key.toLowerCase()];
        storage[group] = storage[group] || [];
        storage[group].push(item);

        return storage;
    }, {});
};

function compareByYear(a, b) {
    if(a.Year < b.Year)
        return -1;
    if(a.Year > b.Year)
        return 1;

    return 0;
}

export {getDate, groupBy, compareByYear}