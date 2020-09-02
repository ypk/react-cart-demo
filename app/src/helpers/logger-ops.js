const debug = true;

const Logger = {
    log : (msg) => debug && console.log(msg),
    info : (msg) => debug && console.info(msg),
    debug : (msg) => debug && console.debug(msg),
    error : (msg) => debug && console.error(msg),
};

export default Logger;
