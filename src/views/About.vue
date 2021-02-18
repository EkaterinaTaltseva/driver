<template>
  <div class="about">
    <h1>This is an about page</h1>
      <v-app id="inspire">
        <v-container fluid grid-list-xl>
          <v-layout wrap align-center>
            <v-flex xs12 sm6>

              <v-select
                  :items="items"
                  v-model="selected"
                  label="Водительские категории"
                  multiple
              >
              </v-select>
              <p>Код: {{ driverCat }}</p>
              <p>Категоря: {{ selected }}</p>
            </v-flex>
            <v-flex xs12 sm6>
              <p>Водительские категории хранятся в переменной 'driverCat' в формате - '12211', где 2 означает наличие категории, 1 ее отсутствие.</p><p>Задача - отработать получение, отображение в списке (в данном случае должно отображаться 'B, C'), возможность изменения и сохранение в том же формате.</p><h3 class="error--text">Важное условие:</h3><p>Постарайтесь максимальнно использовать логику Vue и обойтись без эвентов типа @input, @change, @click и т.д.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-app>
  </div>
</template>
<script>
export  default {
  data: () => ({
    items: ['A', 'B', 'C', 'D', 'E'],
    selected:[],
  }),
  computed: {
    driverCat() {
      return this.$store.getters["driver/driverCat"]
    },
    driverCatArray() {
      return  this.driverCat.split('')
    },
    selectedLength() {
      return this.selected.length
    }
  },
  methods: {},
  watch: {
    selectedLength () {
        const CatArr = [...this.driverCatArray]
        this.items.forEach((selectedItem, idx) => {
          const isFound = this.selected.includes(selectedItem)
          CatArr[idx] = isFound ? '2' : '1' ;
        })
        this.$store.dispatch('logic/driverCatChange', CatArr.join('') )
        this.selected.sort()
    }
  },
  mounted() {
    this.driverCatArray.forEach((driverCatItem, idx) => {
      if (driverCatItem === '2') {
        this.selected.push(this.items[idx])
      }
    })
  }
}
</script>