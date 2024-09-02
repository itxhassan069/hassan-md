const bot = require(__dirname + '/lib/smd');
const { VERSION } = require(__dirname + '/config');
const Debug = require('debug')('bot'); // Ensure 'debug' is required to avoid undefined reference

const start = async () => {
    Debug(`hassan ${VERSION}`); // Log version using the debug instance
    try {
        await bot.init();
        bot.logger.info('⏳ Database syncing!');
        await bot.DATABASE.sync();
        await bot.connect();
    } catch (error) {
        Debug.error(error);
        start(); // Recursive call in case of an error
    }
};

start();
