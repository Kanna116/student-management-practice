<template>
<form @submit.prevent="updateStudent" method="post">
    <h1 class="title">Student Updating Form</h1>
    <div class="form-input">
      <label for="firstName">First Name *</label>
      <input type="text" name="firstName" id="firstName" v-model="formData.firstName" required/>
    </div>
    <div class="form-input">
      <label for="lastName">Last Name *</label>
      <input type="text" name="lastName" id="lastName" v-model="formData.lastName" required/>
    </div>
    <div class="form-input double-inputs">
      <div class="option-input">
        <label for="age">Age *</label>
        <input type="number" name="age" id="age" v-model="formData.age" required/>
      </div>
      <div class="option-input radios">
        <label for="gender">Gender *</label>
        <div class="radio-btns">
          <input type="radio" value="male" name="gender" id="male" v-model="formData.gender" required/>
          <label for="male">Male</label>
          <input type="radio" value="female" name="gender" id="female" v-model="formData.gender" required/>
          <label for="female">Female</label>
          <input type="radio" value="other" name="gender" id="other" v-model="formData.gender" required/>
          <label for="other">Other</label>
        </div>
      </div>
    </div>
    <div class="form-input">
      <label for="name">Email *</label>
      <input type="email" name="name" id="name" v-model="formData.email" required/>
    </div>
    <div class="form-input">
      <label for="name">Phone *</label>
      <input type="numbder" name="name" id="name" v-model="formData.phone" required/>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      studentId: null,
      formData: {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        phone: ''
      }
    }
  },
  mounted() {
    this.studentId = this.$route.params.id
    this.fetchStudentData(this.studentId)
  },
  methods: {
    fetchStudentData(id) {
      fetch(`https://666419f0932baf9032a9f886.mockapi.io/api/students/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.formData = res
        })
        .catch((err) => console.log(err.message))
    },
    updateStudent() {
      //   console.log(this.formData);
      fetch(`https://666419f0932baf9032a9f886.mockapi.io/api/students/${this.studentId}`, {
        method: 'PUT',
        body: JSON.stringify({
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          age: this.formData.age,
          gender: this.formData.gender,
          email: this.formData.email,
          phone: this.formData.phone
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then(() => {
          alert('Successfully updated the Student data')
          this.$router.push('/student');
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>