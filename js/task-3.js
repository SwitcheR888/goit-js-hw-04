const profile = {
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours){
        this.playTime += hours;
    },
    getInfo(){
        return `name ${this.username} time ${this.playTime}`;
        
    },
};

console.log(profile.getInfo());

console.log(profile.changeUsername());

console.log(profile.updatePlayTime());