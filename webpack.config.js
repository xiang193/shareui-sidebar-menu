/**
 * Created by liaoyf on 2017/3/6 0006.
 */
function buildConfig(env){
    if(env === 'prodmin'){
        return require('./config/prod.js')({
            env: env
        });
    }else{
        return require('./config/' + env + '.js')({
            env: env
        });
    }
}

module.exports = buildConfig;