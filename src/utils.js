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

export {getDate, groupBy}