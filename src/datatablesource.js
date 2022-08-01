export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "ABC",
    img: "https://images.pexels.com/photos/12638731/pexels-photo-12638731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "ABC@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Annie ",
    img: "https://images.pexels.com/photos/12144473/pexels-photo-12144473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "annie@gmail.com",
    status: "passive",
    age: 12,
  },
  {
    id: 3,
    username: "Sagar",
    img: "https://images.pexels.com/photos/10677495/pexels-photo-10677495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "sagar@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Sanjai",
    img: "https://images.pexels.com/photos/12836129/pexels-photo-12836129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "sanjai@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Tara",
    img: "https://images.pexels.com/photos/11540260/pexels-photo-11540260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "tara@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melin",
    img: "https://images.pexels.com/photos/8916187/pexels-photo-8916187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "melin@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Ramesh",
    img: "https://images.pexels.com/photos/11843489/pexels-photo-11843489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "ramesh@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Suresh",
    img: "https://images.pexels.com/photos/12973509/pexels-photo-12973509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "suresh@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Rambo",
    img: "https://images.pexels.com/photos/8908751/pexels-photo-8908751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "rambo@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Rocky",
    img: "https://images.pexels.com/photos/12906894/pexels-photo-12906894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "rocky@gmail.com",
    status: "active",
    age: 65,
  },
];
