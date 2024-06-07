<template>
  <div class="main">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="students.length > 0">
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.id }}</td>
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.phone }}</td>
          <td>
            <button class="btn btn-success">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="8" style="text-align: center;">
            Loading...     Please wait
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: []
    }
  },
  mounted() {
    this.getAllStudents()
  },
  methods: {
    getAllStudents() {
      // console.log("running");
      fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((res) => (this.students = res.users))
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  padding: 0px 96px;
}
table{
  border-collapse: collapse;
  margin: 20px auto;
  min-width: 70vw;
}
tr th{
  background-color: #eee;
}
tr,td,th{
  padding: 10px;
  border: 1px solid #00000050;
}
th, td{
  padding: 10px 15px ;
}
.btn{
  padding: 5px 10px;
  border: 1px solid #00000050;
  border-radius: 5px;
  
}
.btn-success{
  background-color: lightgreen;
}
.btn-danger{
  background-color: lightcoral;
}

.btn:nth-child(1){
  margin-right: 10px;
}

</style>
