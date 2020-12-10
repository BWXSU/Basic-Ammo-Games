//Variables
let arAmmoCount = 30
let glockAmmoCount = 20
let arReloadComplete = ''
let glockReloadComplete = ''
let arShotFired = ''
let glockShotFired = ''

//If ar
if (arShotFired = true){
    arAmmoCount--;
}
if (arAmmoCount = 0){
    arAmmoCount = 30
}
if (arReloadComplete = true){
    arAmmoCount = 30
}

//If glock
if (glockShotFired = true){
    glockAmmoCount--;
}
if (glockAmmoCount = 0){
    glockAmmoCount = 20
}
if (glockReloadComplete = true){
    glockAmmoCount = 30
}
console.log('AR Ammo:' + arAmmoCount);
console.log('Glock Ammo:' + glockAmmoCount);