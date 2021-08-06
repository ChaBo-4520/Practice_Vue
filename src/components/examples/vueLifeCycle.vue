<template>
  <div>
    <h2>Vue의 라이프 사이클을 알아보자</h2>
    <h3>콘솔창을 확인하시오</h3>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: "sample",
    };
  },
  methods: {
    sampleFunction() {
      console.log("함수입니다!");
    },
  },
  created() {
    console.log("Created!!");
    console.log("Created에서 data에 접근할 수 있다.");
    console.log(`data : ${this.sampleData}`);
    console.log("Created에서 메소드에 접근할 수 있다.");
    this.sampleFunction();
  },
  mounted() {
    console.log("Mounted!!");
  },
};
</script>

<style></style>
