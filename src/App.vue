<template>
  <div id="app" class="pa5 vh-100 f5 lh-copy fira-sans bg-white near-black">
    <transition name="fade-move" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
:root {
  --leave-curve: cubic-bezier(0.23, 1, 0.32, 1);
}

.fira-sans { font-family: 'Fira Sans', sans-serif; }

.fade-move-enter-active {
  transition:
    opacity .4s var(--leave-curve),
    transform .4s var(--leave-curve);
}
.fade-move-leave-active {
  transition:
    opacity .15s var(--leave-curve),
    transform .15s var(--leave-curve);
}

.fade-move-enter {
  transform: translateY(-3rem);
  opacity: 0;
}

.fade-move-leave-to {
  transform: translateX(1rem);
  opacity: 0;
}
</style>
