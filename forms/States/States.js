let states = ['Hawaii','Nebraska','California']
let newstates = prompt('please enter a new state')
let lnewstates = newstates.toLowerCase()
let Cnewstates = lnewstates.charAt(0).toUpperCase() + lnewstates.slice(1)
states.push(Cnewstates)
states.sort()
let finalstates = states.join('\n')
console.log(finalstates)
alert(`the array have states:\n ${finalstates}`)
  