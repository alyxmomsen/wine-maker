export function randomId(amount: number): string {
    let str: string = ''

    const letters = 'qwertyuiopasdfghjklzxcvbnm1234567890'

    for (let i = 0; i < amount; i++) {
        str += letters[Math.floor(Math.random() * letters.length)]
    }

    return str
}

export function randomName(length: number) {
    let str = ''
    const lettersA = 'eyuioa'
    const lettersB = 'qwrtpsdfghjklzxcvbnm'.toUpperCase()

    for (let i = 0; i < length; i++) {
        let part = lettersB[Math.floor(Math.random() * lettersB.length)]
        part += lettersA[Math.floor(Math.random() * lettersA.length)]
        str += part
    }

    return str
}

export function dateStringFromUnixTime(value: number): string {
    const dateObj = new Date(value)

    const hour = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const seconds = dateObj.getSeconds()

    return `${hour}:${minutes}:${seconds}`
}
