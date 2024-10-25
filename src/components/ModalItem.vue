<script setup lang="ts">
const props = defineProps({
    topic: String,
    time : Number
})


</script>

<template>
    <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-width-5-6 uk-height-large">

            <div class="uk-modal-header">
                <div class="uk-modal-title uk-text-center">「{{ topic }}」がお題です！</div>
            </div>

            <div class="uk-modal-body uk-flex uk-flex-center uk-flex-column">
                <div class="uk-margin uk-text-lead uk-text-center">
                    <div >自分自身の目標秒数を</div><div class="uk-text-bold">「{{ topic }}」</div><div> の例えを使ってうまく相手に伝えましょう</div>
                </div>

                <div class="uk-text-center">
                    話し合い経過時間
                </div>

                <div class="uk-text-center">
                    {{ time }} 秒
                </div>

                <div class="uk-position-bottom-left uk-margin-left uk-margin-bottom">
                    <div>例: お題が「動物」の場合</div>
                    <div>「キリンくらいの高さが目標秒数だよ！(実際の目標秒数は10秒)」</div>
                </div>
            </div>

        </div>
    </div>
</template>