<template>
  <div class="text-xs-center">
    <span v-for="(val,index) in computedArr(page)" :key="index">{{val}}</span>
    <div class="text-xs-center">
      
      <v-container>
        <v-layout justify-center>
          <v-flex xs8>
            <v-card>
              <v-card-text>
                <v-pagination v-model="page" :length="length"></v-pagination>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      perpage: 5,
      length: 1
    };
  },

  created: function() {
    this.length = Math.ceil(this.array.length / this.perpage);
  },
  computed: {
    array() {
      let arr = [];
      for (let i = 0; i <= 51; i++) {
        arr.push(i);
      }

      return arr;
    }
  },
  methods: {
    computedArr(page) {
      let newArr = this.array.slice();
      let from = page * this.perpage - this.perpage;
      let to = page * this.perpage;
      // for(let i = from;i < to;i++){
      //  newArr[i] = this.array[i]
      // }

      return newArr.slice(from, to);
    }
  }
};
</script>