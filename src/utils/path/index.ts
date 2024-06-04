export const isExternal = (path: string) => {
    return /^(https?:|mailto:|tel:)/.test(path);
};

export const formatPath = (path: string) => {
    if (path.length === 0 || path === 'undefined') {
        return path;
    }

    const result = path.replace('//', '/');

    const lastIndex = result.length - 1;

    if (result[lastIndex] === '/') {
        return result.slice(0, lastIndex);
    }

    return result;
};

export const resolvePath = (basePath: string, routePath: string) => {
    if (isExternal(routePath)) {
        return routePath;
    }

    if (isExternal(basePath)) {
        return basePath;
    }

    return formatPath(basePath + '/' + routePath);
};
