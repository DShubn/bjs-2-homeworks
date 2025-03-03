class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
       if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы')
       }

       for (let i = 0; i < this.alarmCollection.length; i++) {
         if(this.alarmCollection[i].time === time) {
           throw new Error('Уже присутствует звонок на это же время')
         }
       }

       this.alarmCollection.push({
        callback,
        time,
        canCall: true,
       })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((e) => e.time !== time);
    }

    getCurrentFormattedTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      
      return hours + ':' + minutes;
    }

    start() {
      if(this.intervalId) {
        return
      }

      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach((alarm) => {
          if(alarm.time === currentTime && alarm.canCall === true) {
            alarm.canCall = false;
            alarm.callback();
          }
        })
        
      }, 1000)
    }

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    resetAllCalls() {
      this.alarmCollection.forEach((element) => element.canCall = true)
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
       
}