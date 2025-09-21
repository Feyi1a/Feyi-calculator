/*Making this module to handle other logics such as:
Check the Apps file directory using local in-built nodesJs through ESM format,
Check for the Applications Basename.
*/

export function pathName(){
    return import.meta.filename;
}

export function baseName(){
    return import.meta.dirname;
}

