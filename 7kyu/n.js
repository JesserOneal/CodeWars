
    const numberOfSigfigs = n =>
  `${n}`.replace(/^[0.]+(?!$)|(?<!\..*)0+$|\./g, '').length;

  function numberOfSigfigs(n){
    let s = (n+'').replace(/^0+/,'')
    if (/\./.test(s)){
      let [x,y] = s.split`.`
      if (x==='') return y.replace(/^0+/,'').length || 1
      return x.length+y.length
    }
    return s.replace(/0+$/,'').length
}
  

  console.log(numberOfSigfigs('012040'))

