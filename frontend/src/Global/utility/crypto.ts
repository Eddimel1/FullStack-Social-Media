export function randomString(len:number, _an:'a' | 'n') {
    let an = _an && _an.toLowerCase();
    let str = "",
      i = 0,
      min = an == "a" ? 10 : 0,
      max = an == "n" ? 10 : 62;
    for (; i++ < len;) {
      let r = Math.random() * (max - min) + min << 0;
      str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str;
  }

  export function returnSameValue () {
    let old_val
    return (fc:Function,args:any[]) => {
        const new_val = fc(...args)
        if(!old_val){
            old_val = new_val
            return new_val
        }
        else {
            return old_val
        }
    }

  }