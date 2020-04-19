let Human=function (name,weight,gender) {
    this.name=name;
    this.weight= weight;
    this.gender=gender;
    this.isMale=function () {
        if(this.gender){
            return true;
        }
        else {
            return false;
        }
    }
    this.setGender=function (boolean) {
        this.gender=boolean;

    }
    this.checkApple =function (apple) {
        if(apple.isEmpty()){
            return true;
        }
        else
            return false;
    }
    this.eatApple =function (apple) {
        apple.decrease();
        this.weight ++;

    }
    this.getName=function (human) {
        return human.name;
    }
    this.setName = function (human) {
        this.getName(human);
        alert('em này tên: '+ human.name);
    }
    this.getWeight =function (human) {
        return human.weight;

    }
    this.setWeight= function (human) {
        this.getWeight(human);
        alert("em nay nang: "+human.weight);

    }

}