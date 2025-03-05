class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
       if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы')
       }

       if(this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn('Уже присутствует звонок на это же время')
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
      const time = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      })
      return time;
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