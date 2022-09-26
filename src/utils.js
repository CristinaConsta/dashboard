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

function getYearAverages(grades)
{
    var yearAverages = [];

    var years = groupBy(grades, 'Year');
    Object.keys(years).forEach(year => {

        var yearSum = 0;
        var courses = groupBy(years[year], 'Course');

        var courseAverages = [];

        Object.keys(courses).forEach(course => {
            var courseSum = 0;
            courses[course].forEach(g => {
                courseSum += (g.mark * g.weight / 100);
            });

            yearSum += courseSum;
            var courseAverage = courseSum;
            courseAverages.push({course: course, average: courseAverage});
        });

        var yearAverage = yearSum / Object.keys(courses).length;
        yearAverages.push({ year: year, average: yearAverage, courseAverages: courseAverages });
    });

    return yearAverages;
}

export {getDate, groupBy, compareByYear, getYearAverages }