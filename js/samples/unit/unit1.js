/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if(name === 'Alexandra') {
        return "Bonjour Alexandra"
    }

    if(name === 'McFly') {
        return "Salut poto McFly"
    }

    if(name === 'Carlito') {
        return "Yo frére de McFly"
    }

    return `Hello, ${name}`
}
