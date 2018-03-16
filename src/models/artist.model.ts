export class Artist {

    private id: number;
    private name: string;
    private occupation: string;
    private img: string;
  
    constructor(id: number,name: string, occupation: string, img: string) {
      this.id = id;
      this.name = name;
      this.occupation = occupation;
      this.img = img;
    }
  
    static build(data) {
      return new Artist(data.id,data.name, data.occupation, data.img);
    }

    getId(): number{
      return this.id
    }
  
    getName(): string {
      return this.name;
    }
  
    getOccupation(): string {
      return this.occupation;
    }
  
    getImg(): string {
      return this.img;
    }
  
  
  }
  