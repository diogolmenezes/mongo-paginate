var mongoose = require('mongoose');

mongoose.Query.prototype.paginate = function paginate(page, limit, getTotal) {

    page = page || 1;
    limit = limit || 10;

    var query = this;
    var model = this.model;
    var skipFrom = (page * limit) - limit;

    return new Promise(function (resolve, reject) {
        query.skip(skipFrom).limit(limit + 1).exec(function (err, docs) {
            if (err)
                reject(err);
            else {
                result = {
                    items_per_page: limit,
                    has_next: docs.length > limit,
                    current_page: page,
                    docs: docs
                }

                if (getTotal) {
                    model.count(query._conditions, function (err, total) {
                        if (err)
                            reject(err)
                        else {
                            result.total_items = total;
                            result.total_pages = Math.round(total / limit);
                            resolve(result);
                        }
                    });
                }
                else
                    resolve(result);
            }
        })
    });

};