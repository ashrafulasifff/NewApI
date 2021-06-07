const ages=[12,14,16,17,54];
const ages2=[23,12,4];
const ages3=[2,43,23];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);

const allAges2=[...ages,...ages,5,...ages3];

console.log(allAges2);
