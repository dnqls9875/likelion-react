// export const message: string = "Hello TypeScript 🚅";

export enum Greeting {
  KO = "안녕!",
  EN = "Hello",
  JP = "こんにちは",
  CN = "你好。",
  ES = "Hola",
  FR = "Bonjour",
  IT = "Buon giorno",
  RU = "ДРАВСТВУЙТЕ",
}

export type GreetingKey = keyof typeof Greeting;
