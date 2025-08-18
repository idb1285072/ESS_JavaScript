const person = {
  name: "master",
  show: function () {
    return ()=>{
      this.name;
    }
  },
};
const t =person.show()
console.log(t())
