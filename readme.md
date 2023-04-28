# gimme_neko

I just want a neko using **[nekos.best](https://nekos.best) api**~

![nekohug](https://user-images.githubusercontent.com/84064124/233825692-588a474f-3e96-47d0-b2fb-745c6cc180e3.png)![nekohug](https://user-images.githubusercontent.com/84064124/233825688-1293878c-090d-48b0-948b-3f904c355bd8.png)

## Import `deno 🦖`
```ts
import {gimme_neko} from 'https://deno.land/x/gimme_neko@v1.0.0/mod.ts';
```

# function
## `gimme_neko(): neko_url`
**SLIME:** smth like-
```ts
import {gimme_neko, neko_url} from 'https://deno.land/x/gimme_neko@v1.0.0/mod.ts'; // import

const neko: neko_url = await gimme_neko(); // (await) cus returns a Promise<>
console.log(neko); // log neko
```
## console
```sh
$ https://nekos.best/api/v2/neko/07996548-24a8-44b5-9200-2a0a74309eb3.png
```
(or)
```sh
$ undefined
```
**SLIME:** **`undefined`** cus error ;-;
## error
```sh
$ SLIME: theres no neko here~
```
**SLIME:** never really happens but JIC (just-in-case)
