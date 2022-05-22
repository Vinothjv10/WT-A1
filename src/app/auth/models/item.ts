export class Jobs{
    id: any;
    title: any;
    description: any;
    location: any;
    country: any;
    category: any;

    key: any;
    name: any;
    url: any;
    file: File;
  
    constructor(file: File) {
      this.file = file;
    }
  }
  