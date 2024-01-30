type Employee={
    name: string;
    startDate: Date;

}
type Manager={
    name: string;
    department:string;
}

type Teamlead = Employee & Manager;

const teamlead: Teamlead = {
    name : "naruto",
    department: "tech",
    startDate: new Date()

}
console.log(teamlead);