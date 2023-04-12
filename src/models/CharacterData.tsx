export type OriginData ={
    name : string,
    url : string
  }
  
  type CharacterData ={
     id: number,
     name: string,
     status: string,
     species : string,
     type: string,
     gender:string,
     image : string,
     origin: OriginData,
     episode : string[],
     url: string,
     created: string
  }

  export default CharacterData;