<script>
export default {
  name: "Footer",
  data() {
    return {
      isAnimating: false
    }
  },
  methods: {
    launchRocket() {
      if (this.isAnimating) return
      this.isAnimating = true

      const rocket = document.createElement('div')
      rocket.id = 'rocket'
      rocket.innerHTML = `
            <div id="rocket-body">X</div>
            <div id="flame"></div>`

      const x = document.getElementById('team-x')
      const rect = x.getBoundingClientRect()

      rocket.style.left = `${rect.left}px`
      rocket.style.top = `${rect.top}px`
      document.body.appendChild(rocket)
      x.style.visibility = 'hidden'

      requestAnimationFrame(() => {
        rocket.classList.add('flying')

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })

        setTimeout(() => {
          rocket.remove()
          x.style.visibility = 'visible'
          this.isAnimating = false
        }, 2000)
      })
    }
  }
}
</script>

<template>
  <footer>
    <p>©2024 Team
      <span id="team-x" @click="launchRocket">X</span>
    </p>
  </footer>
</template>

<style scoped>
footer {
  flex-shrink: 0;
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

#team-x {
  cursor: pointer;
  display: inline-block;
  animation: shake 1.5s ease-in-out infinite;
}

@keyframes shake {
  0%, 25%, 95%, 100% {
    transform: rotate(0deg);
  }
  5%, 15% {
    transform: rotate(10deg);
  }
  10%, 20% {
    transform: rotate(-10deg);
  }
}
</style>

<style>
#rocket {
  display: block;
  position: fixed;
  z-index: 1000;
}

#rocket.flying {
  animation: fly 2s cubic-bezier(0.5, 0, 0.75, 0) forwards;
}

#rocket-body {
  z-index: 1000;
}

#flame {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
  rgb(255, 221, 0) 0%,
    rgba(255,120,0,0.7) 30%,
  rgba(255, 0, 0, 0.4) 60%,
    rgba(255,0,0,0) 100%
  );
  overflow: hidden;
  border-radius: 50%;
  animation: flicker 0.1s infinite;
}

@keyframes fly {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1) translateY(-200vh);
  }
}

@keyframes flicker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
    transform: scaleY(1.3) translateY(-0.1em);
  }
  100% {
    opacity: 1;
  }
}
</style>
