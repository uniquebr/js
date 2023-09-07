function trafficLight(){
    let lightColor='Y'
    switch (lightColor){
        case 'R':
          console.log("Stop")
          break;
        case 'Y':
           console.log("Slow down")
           break;
        case 'G':
          console.log("Go")
          break;
    }
}
trafficLight()