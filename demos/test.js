let { normalize, schema } = require('normalizr');

let origin = {
    "id": "123",
    "author": {
        "id": "1",
        "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
        {
            "id": "324",
            "commenter": {
                "id": "2",
                "name": "Nicole"
            }
        }
    ]
};

const user = new schema.Entity('title');

const normalizedData = normalize(origin, user);

console.log('--->', normalizedData);
