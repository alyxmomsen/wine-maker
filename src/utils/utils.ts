export function randomId(amount: number): string {
    let str: string = ''

    const letters = 'qwertyuiopasdfghjklzxcvbnm1234567890'

    for (let i = 0; i < amount; i++) {
        str += letters[Math.floor(Math.random() * letters.length)]
    }

    return str
}
