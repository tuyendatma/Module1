let Apple = function () {
    this.weight=10;
    this.decrease =function () {
        this.weight --;
    }
    this.isEmpty =function () {
        if(this.weight==0){
            return false;
        }
        else{
            return true;
        }

    }
    this.getWeight =function () {
        return this.weight;

    }

}