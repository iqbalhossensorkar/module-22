for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('object');
  }
  if(i % 3 === 0){
    console.log('Foo');
  } else if(i % 5 === 0){
    console.log('Bar');
  }
  console.log(i);
}
