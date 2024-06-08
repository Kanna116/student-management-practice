<template>
  <form @submit.prevent="submitForm" method="post">
    <h1 class="title">Student Adding Form</h1>
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
          <input type="radio" value="male" name="gender" id="male" v-model="formData.gender"  required/>
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
      <input type="numbder" name="name" id="name" v-model="formData.phone" required />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    submitForm() {
    //   console.log(this.formData);
      fetch('https://666419f0932baf9032a9f886.mockapi.io/api/students', {
        method: 'POST',
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
        .then((result) => {
        //   console.log(result)
          alert('Successfully added the new Student data')
          this.formData = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            email: '',
            phone: ''
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
form {
  width: 70%;
  padding: 0px 30px;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px auto 0px;
}
form .form-input,
.option-input {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
}
.form-input label {
  font-size: 18px;
}
.form-input input {
  width: 100%;
  max-width: 90vw;
  height: 40px;
  padding: 0px 10px;
  border: 1px solid #000000aa;
  border-radius: 4px;
}
.form-input.double-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.option-input {
  width: calc(50% - 10px);
}
.radio-btns {
  display: flex;
  align-items: center;
  gap: 10px;
}
form button {
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid #000000aa;
  align-self: flex-start;
  margin-top: 10px;
  transition: all 200ms ease;
}
button:hover {
  background-color: #a2d2ff;
}
button:active {
  scale: 95%;
}
</style>
