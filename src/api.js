export const getComments=async()=>{
  return[
    {
      id:"1",
      body:"First comment",
      username:"Erblina",
      userId:"1",
      parentId:null,
      createdAt:"2022-09-16T23:00:33.010+02:00",
    },
    {
      id:"2",
      body:"Second comment",
      username:"Erblina",
      userId:"2",
      parentId:null,
      createdAt:"2022-09-16T23:00:33.010+02:00",
    },
    {
      id:"3",
      body:"First comment first child",
      username:"Erblina",
      userId:"2",
      parentId:"1",
      createdAt:"2022-09-16T23:00:33.010+02:00",
    }

  ]
}