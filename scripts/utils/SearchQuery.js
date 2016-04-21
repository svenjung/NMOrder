export function queryString(search, callback) {
    var queryString = search || typeof location !== 'undefined' && location.search;
    if (!queryString)  {
        callback('search argument missing');
    } else {
        queryString = queryString.trim().replace(/^(\?)/, '');
        queryString = queryString.split('&');

        var query = {};
        queryString.forEach(q => {
            var segment = q.split('=');
            query[segment[0]] = segment.length > 1 ? segment[1] : true;
        });

        callback(null, query);
    }
}