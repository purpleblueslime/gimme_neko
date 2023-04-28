import {nyaa} from './nyaa.ts';
import {neko_url} from './type.ts';

/**
  * @export
  * @function gimme_neko
  * @returns Promise<neko_url>
  * @since 1.0.0
  */

export async function gimme_neko (): Promise<neko_url> {
  try {
    return await nyaa();
  }
  catch (error) {
    console.error(error);
  }
}