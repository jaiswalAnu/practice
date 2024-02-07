console.log("this is tutorial31");
class Employee{
    constructor(givenName,givenExperience,givenDivision)
{
    this.name=givenName;
    this .experience=givenExperience;
    this.division=givenDivision;
}
slogan(){
    return `I am ${this.name} and this company is the best`;
}
joiningYear(){
    return 2020-this.experience;

}
static add(a,b){
    return a+b;
}
}
// harry=new Employee("harry",56,"programmer");
// console.log(harry.joiningYear());
class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision)
        this.language=language;
        this.github=github;


    
    }
    favoriteLanguage(){
        if (this.language=='python') {
            return 'python'
        }
        else
        {
            return 'javaScript'
        }
    }
    static multiply(a,b){
        return a*b;
    }

}
rohan =new Programmer("Rohan",3,"Lays","Go","Rohan420");
console.log(rohan);