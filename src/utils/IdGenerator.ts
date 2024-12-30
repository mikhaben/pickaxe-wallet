export default class IdGenerator {
  static rand(): number{
    const arr = new Uint32Array(1);
    globalThis.crypto.getRandomValues(arr);
    return arr[0] / (0xffffffff + 1);
  }

  static text(size: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < size; i++) text += possible.charAt(Math.floor(IdGenerator.rand() * possible.length));
    return text;
  }

  static numeric(size: number): string {
    const add = 1;
    let max = 12 - add;

    if (size > max) return IdGenerator.numeric(max) + IdGenerator.numeric(size - max);

    max = Math.pow(10, size + add);
    const min = max / 10,
    number = Math.floor(IdGenerator.rand() * (max - min + 1)) + min;

    return (`${ number}`).substring(add);
  }
}
