import {neko_url} from './type.ts';

/**
  * @export
  * @function nyaa
  * @returns Promise<neko_url>
  * @since 1.0.0
  */

export async function nyaa (): Promise<neko_url> { // undefined cus error ;-;
  const url = 'https://nekos.best/api/v2/neko'; // nekoUrl
  const {results} = await (await fetch(url)).json(); // results : Array
  if (!results) throw 'SLIME: theres no neko here~'; // throw smth (never really happens but JIC)

  const data = await results.pop() // (pop) -> data : Object
  return data.url; // return nekos url >u<
}