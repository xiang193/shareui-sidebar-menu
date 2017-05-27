/**
 * Created by liaoyf on 2017/5/26 0026.
 */
/**
 * 在数组中递归替换对象
 * @param array
 * @param fieldName
 * @param replaceObj
 */
export function replaceObjInArray(array, fieldName, obj, replaceObj){
    let { childrenField } = fieldName;
    let loop = (data) => {
        data.forEach((item, index) => {
            if(JSON.stringify(item) == JSON.stringify(obj)){
                data[index] = replaceObj;
                return false;
            }else{
                if(item[childrenField] && item[childrenField].length > 0){
                    loop(item[childrenField]);
                }
            }
        });
    };

    loop(array);
}

/**
 * 递归移除数组中的某个字段
 * @param array
 * @param fieldName
 * @param field
 * @param excludeObj
 */
export function removeFieldInArray(array, fieldName, field, excludeObj){
    let { childrenField } = fieldName;
    let loop = (data) => {
        if(data){
            if(data[field] && JSON.stringify(data) != JSON.stringify(excludeObj)){
                delete data[field];
            }
            data.forEach(item => {
                if(item[field] && JSON.stringify(item) != JSON.stringify(excludeObj)){
                    delete item[field];
                }
                if(item[childrenField] && item[childrenField].length > 0){
                    loop(item[childrenField]);
                }
            })
        }
    };

    loop(array);
}

/**
 * 移除同级字段
 * @param array
 * @param fieldName
 * @param field
 * @param obj
 */
export function removeSiblingField(array, fieldName, field, obj){
    let { childrenField } = fieldName;
    let loop = (data) => {
        if(data){
            data.forEach((item, index) => {
                if(JSON.stringify(item) == JSON.stringify(obj)){
                    data.forEach((x, y) => {
                        if(y !== index){
                            delete x[field];
                        }
                    })
                }else{
                    if(item[childrenField] && item[childrenField].length > 0){
                        loop(item[childrenField]);
                    }
                }
            });
        }
    };

    loop(array);
}

/**
 * 选中第一个菜单
 * @param array
 * @param fieldName
 */
export function selectFirst(array, fieldName){
    let { childrenField } = fieldName;
    let loop = (data) => {
        if(data[0]){
            if(data[0][childrenField] && data[0][childrenField].length > 0){
                data[0].collapse = true;
                loop(data[0][childrenField]);
            }else{
                data[0].selected = true;
                return false;
            }
        }
    };

    loop(array);
}

/**
 * 选中指定id的菜单
 * @param array
 * @param fieldName
 * @param id
 */
export function selectById(array, fieldName, id){
    let { childrenField, idField } = fieldName;
    let loop = (data) => {
        if(data){
            data.forEach(item => {
                if(item[childrenField] && item[childrenField].length > 0){
                    if(hasExistField(item[childrenField], id, fieldName)){
                        item.collapse = true;
                    }
                    loop(item[childrenField]);
                }else{
                    if(item[idField] === id){
                        item.selected = true;
                    }
                }
            });
        }
    };

    loop(array);
}

function hasExistField(data, id, fieldName){
    let { childrenField, idField } = fieldName;
    let exists = false;
    let loop = (data) => {
        data.forEach(item => {
            if(item[childrenField] && item[childrenField].length > 0){
                loop(item[childrenField]);
            }else{
                if(item[idField] === id){
                    exists = true;
                    return false;
                }
            }
        })
    };

    loop(data);

    return exists;
}