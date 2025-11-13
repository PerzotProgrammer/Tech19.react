export function getRandomAmount() {
    return Math.floor(Math.random() * 5) + 1;
}

export function getRandomItems<T>(arr: T[], n: number): T[] {
    return arr
        .map(item => ({item, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, n)
        .map(({item}) => item);
}