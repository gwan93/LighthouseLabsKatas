const checkAir = function(samples, threshold) {
  let cleanCounter = 0;
  let dirtyCounter = 0;
  for (const eachElement of samples) {
    if (eachElement === 'clean') {
      cleanCounter += 1;
    } else if (eachElement === 'dirty') {
      dirtyCounter += 1;
    }
  }
  if (dirtyCounter / (cleanCounter + dirtyCounter) > threshold) {
    return 'polluted';
  } else {
    return 'clean';
  }
};

console.log(checkAir(   // polluted
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(   // polluted
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(   // clean
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));