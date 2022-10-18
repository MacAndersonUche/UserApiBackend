const {db, userInfo} = require('./db1.js');
let newInfo;
(async () => {

    newInfo = await db.get('userInfo')
    console.log(userInfo);
})();
