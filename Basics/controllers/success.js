const path = require('path');
const rootDir = require('../utils/path');


exports.getSuccess = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}
