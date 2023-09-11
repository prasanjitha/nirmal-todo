
/**
 * Check is empty
 * @param {string|number|object|Array} value 
 * @returns bool
 */
const isEmpty=(value)=>{
    return (value==="" || value === null || value === undefined || value.length===0);
}

export {
    isEmpty
}