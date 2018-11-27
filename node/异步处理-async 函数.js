var test = (time)=>{
  return new Promise ( (r1, r2)=>{
    setTimeout(()=>{
      r1();
    },time)
  })
};

var go = async ()=>{
    for (let i = 0; i < 5; i++) {
      await test(1000)
      console.log(i);
    }
    setTimeout(()=>{
      
    })
     console.log('完成');
     return 111111
};
go(4000)
  .then(v=>{
    return go(1000)
  })
  .then(v=>{
    console.log(122333);
  })
