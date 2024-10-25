<script setup lang="ts">
import UIkit from 'uikit';
import TheWelcome from '../components/TheWelcome.vue'
import ModalItem from '@/components/ModalItem.vue';
import { defineComponent, ref, watch, type VueElement } from 'vue';
const topic = ref("動物")
const isStartButtonEnable = ref(true)

let interval :number 
const time_secount = ref(0) 

function LotteryTopic() {
  let topics : Array<string> = ["動物", "建物", "人気給食", "人気ドリンク", "最強の魔法", "自分が新卒の採用担当なら重視すること"]
  topic.value = topics[Math.floor(Math.random() * topics.length)]
}

function StartLottery() {
  clearInterval(interval)
  interval = setInterval(LotteryTopic, 50)
  isStartButtonEnable.value = false
}

function StopLottery() {
  clearInterval(interval)
  isStartButtonEnable.value = true
  setTimeout(() => {
    time_secount.value = 0
    openModal()
    interval = setInterval(() => {
      time_secount.value++;
    }, 1000)

  }, 1500)
}


function openModal() {
  LotteryTopic()
  UIkit.modal("#modal-center").show()
}
</script>

<template>
  <header class="uk-background-muted">
    <div class="uk-margin-large uk-text-large uk-position-top-center ">コミュニケーションisヲッチ</div>
  </header>
  <main class="uk-position-center">
    <div class="uk-text-large">
      <div class="uk-card uk-card-default uk-text-center uk-margin uk-height-medium uk-width-large uk-flex uk-flex-center uk-flex-middle"> {{ topic }}</div>
      <div class="uk-flex uk-flex-around">
        <button class="uk-button" v-bind:disabled="!isStartButtonEnable" @click="StartLottery">スタート</button>
        <button class="uk-button" v-bind:disabled="isStartButtonEnable" @click="StopLottery">ストップ</button>
      </div>
    </div>
  </main>
  <ModalItem :topic="topic" :time="time_secount"></ModalItem>
</template>
